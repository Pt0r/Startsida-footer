import * as React from 'react';
import styles from './FooterList.module.scss';
import { IFooterListProps } from './IFooterListProps';

export interface InfoList {
  SupportNumber: string;
  Id: string;
  SupportEmail: string;
  SkypeLink: string;
  ServicePortalLink: string;
}

export default class FooterList extends React.Component<IFooterListProps> {

  constructor(props: IFooterListProps) {
    super(props);
  }

  public render() {

    if(this.props.userType == "ele"){
    return (
          <div className="ms-Grid-row">
            <div className={ styles.footerTest2 }>

              <div id="ElevColumn" className={ styles.column }>
                <h2 className={ styles.title }>Support för Elever</h2>
                <p>Elever ringer:<a href={"tel:" + this.props.items[1].SupportNumber}> {this.props.items[1].SupportNumber} </a></p>
                <p>Epost: <a href={"mailto:" + this.props.items[1].SupportEmail}> {this.props.items[1].SupportEmail} </a></p>
                <p><a href= {this.props.items[1].SkypeLink} target="_blank">Chatta via Skype></a></p>
                <p><a href= {this.props.items[1].ServicePortalLink} target="_blank">Följ ditt ärende via serviceportal></a></p>
              </div>
            </div>
          </div>
    );
  }
  else if(this.props.userType == "edu"){
    return (
          <div className="ms-Grid-row">
            <div className={ styles.footerTest2 }>
              <div id="PersonalColumn" className={ styles.column}>
                <h2 className={ styles.title }>Support för Personal</h2>
                <p>Personal ringer: <a href={"tel:" + this.props.items[0].SupportNumber}> {this.props.items[0].SupportNumber}</a></p>
                <p>Epost: <a href={"mailto:" + this.props.items[0].SupportEmail}> {this.props.items[0].SupportEmail} </a></p>
                <p><a href= {this.props.items[0].SkypeLink} target="_blank">Chatta via Skype></a></p>
                <p><a href= {this.props.items[0].ServicePortalLink} target="_blank">Följ ditt ärende via serviceportal></a></p>
              </div>
              <div id="ElevColumn" className={ styles.column }>
                <h2 className={ styles.title }>Support för Elever</h2>
                <p>Elever ringer:<a href={"tel:" + this.props.items[1].SupportNumber}> {this.props.items[1].SupportNumber} </a></p>
                <p>Epost: <a href={"mailto:" + this.props.items[1].SupportEmail}> {this.props.items[1].SupportEmail} </a></p>
                <p><a href= {this.props.items[1].SkypeLink} target="_blank">Chatta via Skype></a></p>
                <p><a href= {this.props.items[1].ServicePortalLink} target="_blank">Följ ditt ärende via serviceportal></a></p>
              </div>
              <div id="VardColumn" className={ styles.column }>
                <h2 className={ styles.title }>Support för Vårdnadshavare</h2>
                <p>Vårdnadshavare ringer: <a href={"tel:" + this.props.items[2].SupportNumber}> {this.props.items[2].SupportNumber} </a></p>
                <p>Epost: <a href={"mailto:" + this.props.items[2].SupportEmail}> {this.props.items[2].SupportEmail} </a></p>
              </div>
            </div>
          </div>
    );
  }
  else{
    return (
          <div className="ms-Grid-row">
            <div className={ styles.footerTest2 }>
              <div id="VardColumn" className={ styles.column }>
                <h2 className={ styles.title }>Support för Vårdnadshavare</h2>
                <p>Vårdnadshavare ringer: <a href={"tel:" + this.props.items[2].SupportNumber}> {this.props.items[2].SupportNumber} </a></p>
                <p>Epost: <a href={"mailto:" + this.props.items[2].SupportEmail}> {this.props.items[2].SupportEmail} </a></p>
              </div>
            </div>
          </div>
    );
  }
  }
}
