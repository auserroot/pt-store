// 余额
import React, { Component } from "react";
import style from "./balance.module.scss";
import "../../../icon/font.css"
class Pinkboox extends Component {
  render() {
    return (
      <div className={style.pink}>
        <span>账号余额</span>
        <p>￥ 100.0</p>
      </div>
    );
  }
}
class Balancelink extends Component {
  render() {
    return (
      <div className={style.balancelink}>
        <div className={style.titlebox}>
          <i className={"iconfont "+ this.props.class}></i>
          <span>{this.props.title}</span>
          <span>{">"}</span>
        </div>
      </div>
    );
  }
}

export default class balance extends Component {
    const 
  render() {
    return (
      <div>
        <div className={style.balancehead}>
          <span>{"<"}</span>
          <span>我的余额</span>
          <span></span>
        </div>
        <Pinkboox></Pinkboox>
        <Balancelink
          class='icon-daifukuan'
          title="充值"
        ></Balancelink>
        <Balancelink
          class='icon-yijianfankui'
          title="查看明细"
        ></Balancelink>
      </div>
    );
  }
}
