// 支付成功(拼团)
import React, { Component } from "react";
import { NavBar, Icon, Button } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import "./PaySuccess.scss";
import PaySuccessImg from "../../../../../imgs/payimgs/success.png";
import Line from "../../../../../imgs/payimgs/line.png";
import GoodsIcon from "../../../../../imgs/payimgs/goodsicon.jpg";
import Usericon from "../../../../../imgs/payimgs/usericon.png";
import Model from "./Model.jsx";
class Payfail extends Component {
  state = {
    active: false,
  };
  handelClick = () => {
    this.setState({
      active: !this.state.active,
    });
  };
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
          onLeftClick={() => {
            this.handleGoBack();
          }}
        >
          支付成功
        </NavBar>
        <div className="main_box">
          <div className="img_box">
            <img src={PaySuccessImg} alt="" />
          </div>
          <span className="msg">付款成功</span>
          <p className="msg_tit">恭喜支付成功，可以呼朋唤友参与拼团</p>
        </div>
        <div className="order_box">
          <div className="order">
            <div className="tit">
              <img src={Line} alt="" />
              <span>拼团中</span>
              <img src={Line} alt="" />
            </div>
            <span>还差2人，团长免单，快来邀请好友</span>
            <div className="goods">
              <div className="left">
                <img src={GoodsIcon} alt="" />
              </div>
              <div className="right">
                <span className="title">
                  黄色连衣裙，纯棉设计，洋气大方，韩版流行休闲网纱....
                </span>
                <div className="pay_box">
                  <i>3人团</i>
                  <span className="pay">￥100.0</span>
                  <span className="origin_pay">260</span>
                </div>
              </div>
            </div>
            <div className="user_icon">
              <i>
                <img src={Usericon} alt="" />
              </i>
              <i>
                <img src={Usericon} alt="" />
              </i>
              <i>
                <img src={Usericon} alt="" />
              </i>
            </div>
            <p className="timer">时效（还剩23分14分30秒）</p>
          </div>
          <Button className="but" onClick={this.handelClick}>
            邀请好友
          </Button>
        </div>
        <Model
          active={this.state.active}
          handelClick={this.handelClick}
        ></Model>
      </div>
    );
  }
}

export default Payfail;
