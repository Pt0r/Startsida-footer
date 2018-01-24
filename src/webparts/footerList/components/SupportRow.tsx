import * as React from 'react';
import styles from './FooterList.module.scss';
import { IRowProps } from './IRowProps';
import SupportColumn from './SupportColumn';


export default class SupportRow extends React.Component<IRowProps> {

    constructor(props: IRowProps) {
        super(props);
      }

    public render (){

        if(this.props.userType == "utb")
        { 
            return(
                <div className="ms-Grid-row">
                    <div className={ styles.footerTest2 }>
                        <SupportColumn 
                        usertype="Medarbetare" 
                        title={this.props.listData[0].Title} 
                        tel={this.props.listData[0].SupportNumber}
                        email={this.props.listData[0].SupportEmail}
                        skypelink={this.props.listData[0].SkypeLink}
                        supportlink={this.props.listData[0].ServicePortalLink}
                        {...this.props}/>
                        <SupportColumn 
                        usertype="Elever" 
                        title={this.props.listData[1].Title} 
                        tel={this.props.listData[1].SupportNumber}
                        email={this.props.listData[1].SupportEmail}
                        skypelink={this.props.listData[1].SkypeLink}
                        supportlink={this.props.listData[1].ServicePortalLink}
                        {...this.props}/>
                        <SupportColumn 
                        usertype="Vårdnashavare" 
                        title={this.props.listData[2].Title} 
                        tel={this.props.listData[2].SupportNumber}
                        email={this.props.listData[2].SupportEmail}
                        skypelink={this.props.listData[2].SkypeLink}
                        supportlink={this.props.listData[2].ServicePortalLink}
                        {...this.props}/>
                    </div>
                </div>
            );
        }
        else if(this.props.userType == "ele")
        {
            return(
                <div className="ms-Grid-row">
                    <div className={ styles.footerTest2 }>
                        <SupportColumn 
                        usertype="Elever" 
                        title={this.props.listData[1].Title} 
                        tel={this.props.listData[1].SupportNumber}
                        email={this.props.listData[1].SupportEmail}
                        skypelink={this.props.listData[1].SkypeLink}
                        supportlink={this.props.listData[1].ServicePortalLink}
                        {...this.props}/>
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <div className="ms-Grid-row">
                    <div className={ styles.footerTest2 }>
                        <SupportColumn 
                        usertype="Vårdnashavare" 
                        title={this.props.listData[2].Title} 
                        tel={this.props.listData[2].SupportNumber}
                        email={this.props.listData[2].SupportEmail}
                        skypelink={this.props.listData[2].SkypeLink}
                        supportlink={this.props.listData[2].ServicePortalLink}
                        {...this.props}/>
                    </div>
                </div>
            );
        }
    }
}