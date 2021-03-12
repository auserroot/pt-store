//一起拼团
import React, { Component } from 'react';
import store from "../../../store"
import { homeInitGroupShopDataAction } from "../../../store/action/homeAction"
import {connect} from "react-redux"
import PtHeader from "../../common/pt-header/pt-header"
import GroupShop from "../../common/pt-groupShop/pt-groupShop"
import "./GroupShopping.scss"
class GroupShopping extends Component {
    async componentDidMount() {
 
        store.dispatch(homeInitGroupShopDataAction());
    }
    render() {
        
        return (
            
            <div className="Groupshopping">
                  <PtHeader title="组队拼团" back={true} AD={false}></PtHeader>
                <GroupShop  groupShopData={this.props.groupShopData}></GroupShop>
            </div>
        );
    }
}


export default connect((state)=>{
    return {
     
      groupShopData:state.homeCenterReducer.groupShopData,

    }
  },null)(GroupShopping);