//支付失败(拼团)
import React, { Component } from "react";
import { NavBar, Icon, Button } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import "./Payfail.scss";
import PayFailImg from "../../../../../imgs/payimgs/fail.png";
class Payfail extends Component {
  handleGoBack = (params) => {
    console.log("点击跳转");
    this.props.history.push("/category");
  };
  render() {
    return (
      <div className="warpBox">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.handleGoBack()}}
        >
          支付失败
        </NavBar>
        <div className="main_box">
          <img src={PayFailImg} alt="" />
          <span className="msg">付款失败</span>
          <span className="order">订单编号：2019091920011</span>
          <p className="msg_tit">支付成功后，可以呼朋唤友参与拼团</p>
        </div>

        <Button className="but">立即支付</Button>
      </div>
    );
  }
}

export default Payfail;
