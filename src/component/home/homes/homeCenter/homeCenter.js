import React, { Component } from "react";
import store from "../../../../store";
import {
  homeInitCenterDataAction,
  homeInitPurchaseDataAction,
  homeInitGroupShopDataAction,
} from "../../../../store/action/homeAction";
import { connect } from "react-redux";
import Medi from "../../../common/pt-medi/pt-medi";
import Purchase from "../../../common/pt-purchase/pt-purchase";
import GroupShop from "../../../common/pt-groupShop/pt-groupShop";
import "./homeCenter.scss";

import TarBar from "../../../comm/Tabbar/Tabbar";

class HomeCenter extends Component {
  async componentDidMount() {
    store.dispatch(homeInitCenterDataAction());
    store.dispatch(homeInitPurchaseDataAction());
    store.dispatch(homeInitGroupShopDataAction());
  }
  render() {
    return (
      <div className="HomeCenter">
        <div className="HomeCenter-top">
          <span>急速送達</span>
          <span>100%检测</span>
          <span>产地直销</span>
        </div>
        <div className="HomeCenter-center">
          <img
            src="https://ThorUI.cn/images/mall/activity/img_coupon_banner.png"
            alt=""
          />
        </div>

        <Medi centerData={this.props.centerData}></Medi>
        <Purchase purchaseData={this.props.purchaseData}></Purchase>
        <GroupShop groupShopData={this.props.groupShopData}></GroupShop>
        <TarBar></TarBar>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    centerData: state.homeCenterReducer.centerData,
    purchaseData: state.homeCenterReducer.purchaseData,
    groupShopData: state.homeCenterReducer.groupShopData,
  };
}, null)(HomeCenter);
