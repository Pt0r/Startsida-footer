import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IColumnProps } from './components/IColumnProps';
import pnp from "sp-pnp-js";

import * as strings from 'FooterListWebPartStrings';
import SupportColumn from './components/SupportColumn';

interface InfoList {
  Title: string;
  SupportNumber: string;
  Id: string;
  SupportEmail: string;
  SkypeLink: string;
  ServicePortalLink: string;
}

export default class FooterListWebPart extends BaseClientSideWebPart<"Hej"> {

  public render(): void {
    this._getListData().then((ListData: InfoList[]) => {
      pnp.sp.web.currentUser.get()
      .then(u => {
        console.log(u); 
        let userEmail = u.Email;
        let splitEmail = userEmail.split("@");
        let emailPart = splitEmail[1].substring(0, 3).toLowerCase();

        if (emailPart == "edu"){
          const element: React.ReactElement<IColumnProps> = React.createElement(
            SupportColumn, 
            {
              usertype: "Personal",
              title: ListData[0].Title,
              tel: ListData[0].SupportNumber,
              email: ListData[0].SupportEmail,
              skypelink: ListData[0].SkypeLink,
              supportlink: ListData[0].ServicePortalLink
            });
            ReactDom.render(element, this.domElement);
        }

        else if (emailPart == "ele"){
          const element: React.ReactElement<IColumnProps> = React.createElement(
            SupportColumn, 
            {
              usertype: "Elev",
              title: ListData[1].Title,
              tel: ListData[1].SupportNumber,
              email: ListData[1].SupportEmail,
              skypelink: ListData[1].SkypeLink,
              supportlink: ListData[1].ServicePortalLink
            });
            ReactDom.render(element, this.domElement);
        }

        else {
          const element: React.ReactElement<IColumnProps> = React.createElement(
            SupportColumn, 
            {
              usertype: "Vårdnashavare",
              title: ListData[2].Title,
              tel: ListData[2].SupportNumber,
              email: ListData[2].SupportEmail,
              skypelink: ListData[2].SkypeLink,
              supportlink: ListData[2].ServicePortalLink
            });
            ReactDom.render(element, this.domElement);
        }
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
