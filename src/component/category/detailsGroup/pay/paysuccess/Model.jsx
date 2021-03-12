import React, { Component } from "react";
import "./Model.scss";
import ReactDom from "react-dom";
import weChat01 from "../../../../../imgs/payimgs/wechat01.png";
import weChat02 from "../../../../../imgs/payimgs/wechat02.png";
export default class Model extends Component {
  render() {
    return ReactDom.createPortal(
      <div>
        <div className={this.props.active ? "model " : "model hidden"}>
          <div className="modelItem">
            <div className="title">
              <h2>邀请</h2>
              <i onClick={this.props.handelClick}>X</i>
            </div>
            <div className="weChat">
              <div className="box_f">
                <img src={weChat01} alt="" />
                <span>朋友圈</span>
              </div>
              <div className="box_f">
                <img src={weChat02} alt="" />
                <span>微信好友</span>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }
}
