// 筛选
import React, { Component } from "react";
import { NavBar, Icon, Button, Tag } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import "./select.scss";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import store from "../../store";
class Payfail extends Component {
  onChange = (selected) => {
    console.log(`tag selected: ${selected}`);
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
          筛选
        </NavBar>
        <div className="main_box">
          <div className="price">
            <span>价格区间</span>
            <div className="box">
              <Tag className="tag" onChange={this.onChange}>
                30-70
              </Tag>
              <Tag className="tag" onChange={this.onChange}>
                70-100
              </Tag>
              <Tag className="tag" onChange={this.onChange}>
                100-200
              </Tag>
            </div>
          </div>
          <div className="input">
            <input type="text" placeholder="最低价" />
            <span>——</span>
            <input type="text" placeholder="最高价" />
          </div>
          <div className="price">
            <span>品牌</span>
            <div className="box">
              <Tag className="tag" onChange={this.onChange}>
                花仙子
              </Tag>
              <Tag className="tag" onChange={this.onChange}>
                荣迪尔
              </Tag>
              <Tag className="tag" onChange={this.onChange}>
                天地美
              </Tag>
            </div>
          </div>
          <div className="price">
            <span>折扣和服务</span>
            <div className="box">
              <Tag className="tag" onChange={this.onChange}>
                包邮
              </Tag>
              <Tag className="tag" onChange={this.onChange}>
                赠送运费险
              </Tag>
              <Tag className="tag" onChange={this.onChange}>
                消费者保障
              </Tag>
            </div>
          </div>
        </div>
        <div className="but_box">
          <Button className="rest">重置</Button>
          <Button className="over" onClick={this.handleGoBack}>
            完成
          </Button>
        </div>
      </div>
    );
  }
}

export default Payfail;
