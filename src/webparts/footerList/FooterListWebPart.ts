import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IFooterListProps } from './components/IFooterListProps';
import { InfoList } from './components/FooterList';
import pnp from "sp-pnp-js";

import * as strings from 'FooterListWebPartStrings';
import FooterList from './components/FooterList';

export default class FooterListWebPart extends BaseClientSideWebPart<"Hej"> {

  public render(): void {
    this._getListData().then((ListData: InfoList[]) => {
      pnp.sp.web.currentUser.get()
      .then(u => {
        console.log(u); 
        let userEmail = u.Email;
        let splitEmail = userEmail.split("@");
        let emailPart = splitEmail[1].substring(0, 3).toLowerCase();
    const element: React.ReactElement<IFooterListProps> = React.createElement(
      FooterList, 
      {
        items: ListData,
        userType: emailPart,
        HttpContext: this.context
      });
    ReactDom.render(element, this.domElement);
    });
  });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private _getListData(): Promise<InfoList[]>{
    pnp.setup({spfxContext: this.context});
    return pnp.sp.web.lists.getByTitle("InfoList").items.get()
    .then((items: any[]) => {
        return items;
      });
    }
}
