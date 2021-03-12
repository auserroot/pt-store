// 商城直播
import React, { Component } from "react";
import "./livshow.scss";
import Bg from "../../../imgs/liveshow/bg.png";
import UserIcon from "../../../imgs/liveshow/usericon.svg";
import Icon from "../../../imgs/liveshow/icon.png";

import TarBar from "../../comm/Tabbar/Tabbar";
class liveshow extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };
  GotoLiveShowInfo = (params) => {
    this.props.history.push("/liveshowinfo");
  };
  render() {
    return (
      <div className="Live_warp">
        <div className="l_title">
          <h1>商城直播</h1>
        </div>
        <div className="Live_main">
          {this.state.items.map((i) => {
            return (
              <div
                className="Live_item"
                key={i}
                onClick={this.GotoLiveShowInfo}
              >
                <div className="img_bg">
                  <img className="bg" src={Bg} alt="" />
                  <div className="looking">
                    <img src={Icon} alt="" />
                    <span>10.1万在看</span>
                  </div>
                  <div className="usericon_box">
                    <img src={UserIcon} alt="" />
                    <span>木子</span>
                  </div>
                </div>
                <div className="f_box">
                  <div className="f_left">
                    <span>嘉年华</span>
                  </div>
                  <div className="f_right">
                    <span>优惠大放送-尽享美食</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <TarBar></TarBar>
      </div>
    );
  }
}

export default liveshow;
