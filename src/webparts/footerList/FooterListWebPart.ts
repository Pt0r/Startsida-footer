import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IColumnProps } from './components/IColumnProps';
import pnp from "sp-pnp-js";
import SupportColumn from './components/SupportColumn';
import SupportRow from './components/SupportRow';
import { ReactElement } from 'react';

interface InfoList {
  Title: string;
  SupportNumber: string;
  Id: string;
  SupportEmail: string;
  SkypeLink: string;
  ServicePortalLink: string;
}

export default class FooterListWebPart extends BaseClientSideWebPart<IColumnProps> {

  public render(): void {
    let element;
    this._getListData().then((ListData: InfoList[]) => {
      this._getUserType().then((UserType: string) => {
        console.log(UserType);
        console.log(ListData);
        if (UserType == "utb"){
          element = React.createElement(
            SupportColumn,
            {
              usertype: "Personal",
              title: ListData[0].Title,
              tel: ListData[0].SupportNumber,
              email: ListData[0].SupportEmail,
              skypelink: ListData[0].SkypeLink,
              supportlink: ListData[0].ServicePortalLink
            },
            SupportColumn,
            {
              usertype: "Elev",
              title: ListData[1].Title,
              tel: ListData[1].SupportNumber,
              email: ListData[1].SupportEmail,
              skypelink: ListData[1].SkypeLink,
              supportlink: ListData[1].ServicePortalLink
            }
          );
        }
        else {
          element = React.createElement(
            SupportColumn,
            {
              usertype: "Vårdnashavare",
              title: ListData[2].Title,
              tel: ListData[2].SupportNumber,
              email: ListData[2].SupportEmail,
              skypelink: ListData[2].SkypeLink,
              supportlink: ListData[2].ServicePortalLink
            }
          );
        }
        console.log(element);
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
        let emailPart = splitEmail[1].substring(0, 3).toLowerCase();
        return emailPart;
      });
  }
}
