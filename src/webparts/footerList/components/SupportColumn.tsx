import * as React from 'react';
import styles from './FooterList.module.scss';
import { IColumnProps } from './IColumnProps';

export default class FooterList extends React.Component<IColumnProps> {

    constructor(props: IColumnProps) {
      super(props);
    }
  
    public render() {
      return (
            <div className="ms-Grid-row">
              <div className={ styles.footerTest2 }>
  
                <div id="ElevColumn" className={ styles.column }>
                  <h2 className={ styles.title }> {this.props.title} </h2>
                  <p>{this.props.usertype} ringer:<a href={"tel:" + this.props.tel}> {this.props.tel} </a></p>
                  <p>Epost: <a href={"mailto:" + this.props.email}> {this.props.email} </a></p>
                  <p><a href= {this.props.skypelink} target="_blank">Chatta via Skype></a></p>
                  <p><a href= {this.props.supportlink} target="_blank">Följ ditt ärende via serviceportal></a></p>
                </div>
              </div>
            </div>
      );
    }
}
  