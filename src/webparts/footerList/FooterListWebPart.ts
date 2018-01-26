import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IRowProps } from './components/IRowProps';
import pnp from "sp-pnp-js";
import SupportRow from './components/SupportRow';
import { ReactElement } from 'react';

export interface InfoList {
  Title: string;
  SupportNumber: string;
  Id: string;
  SupportEmail: string;
  SkypeLink: string;
  ServicePortalLink: string;
}

export default class FooterListWebPart extends BaseClientSideWebPart<"hej"> {

  public render(): void {
    this._getListData().then((ListData: InfoList[]) => {
      this._getUserType().then((UserType: string) => {
        console.log(UserType);
        console.log(ListData);
        const element: React.ReactElement<IRowProps> = React.createElement(
          SupportRow,
          {
            userType: UserType,
            listData: ListData
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

  private _getUserType(): Promise<string>{
    pnp.setup({spfxContext: this.context});
    return pnp.sp.web.currentUser.get()
      .then(u => {
        console.log(u); 
        let userEmail = u.Email;
        let splitEmail = userEmail.split("@");
        let emailPart = splitEmail[0].substring(0, 3).toLowerCase();
        return emailPart;
      });
  }
}
