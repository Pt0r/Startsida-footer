import pnp from "sp-pnp-js";
import { Web } from "sp-pnp-js";

export interface InfoList {
    SupportNumber: string;
    Id: string;
    SupportEmail: string;
    SkypeLink: string;
    ServicePortalLink: string;
  }

export class SPGetter {

    public web;

    private _getListData(): Promise<InfoList[]>{       
    return pnp.sp.web.lists.getByTitle("InfoList").items.get()
    .then((items: any[]) => {
        return items;
      });
    }

      //Hämtar ut inloggad användare och kollar email adressen för att avgöra vilken support kolumn som ska visas
    private _showSupportColumn(){
    return pnp.sp.web.currentUser.get()
    .then(u => {
      console.log(u); 
      let userEmail = u.Email;
      let splitEmail = userEmail.split("@");
      let emailPart = splitEmail[1].substring(0, 3).toLowerCase();
      if (emailPart == "ele"){
        document.getElementById("ElevColumn").style.display = "block";
      }
      else if (emailPart == "edu"){
        document.getElementById("PersonalColumn").style.display = "block";
        document.getElementById("ElevColumn").style.display = "block";
        document.getElementById("VardColumn").style.display = "block";
      }
      else {
        document.getElementById("VardColumn").style.display = "block";
      }
    });
}

}