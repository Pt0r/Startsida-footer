import WebPartContext from "@microsoft/sp-webpart-base/lib/core/WebPartContext";
import { InfoList } from "./FooterList";

export interface IFooterListProps {  
  items: InfoList[];
  userType: string;
  HttpContext: WebPartContext;
}
