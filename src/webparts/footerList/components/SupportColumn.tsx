import * as React from 'react';
import styles from './FooterList.module.scss';
import { IColumnProps } from './IColumnProps';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export default class SupportColumn extends React.Component<IColumnProps> {

    constructor(props: IColumnProps) {
      super(props);
    }
  
    public render() {
      return (
                <div className={ styles.column }>
                  <h2 className={ styles.title }> {this.props.title} </h2>
                  <p><Icon iconName='Phone'/> Ring: <a href={"tel:" + this.props.tel}>{this.props.tel}</a></p>                  
                  <p><Icon iconName='Mail'/> Maila: <a href={"mailto:" + this.props.email}>{this.props.email}</a></p>
                  <p><Icon iconName='SkypeForBusinessLogo16'/> Chatta via <a href={this.props.skypelink} target="_blank">Skype</a></p>
                  <p><Icon iconName='TaskManager'/><a href= {this.props.supportlink} target="_blank"> Följ ditt ärende</a></p>
                </div>
      );
    }
}
  