//商城
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import styles from "./Category.scss";
import "./Category.scss";

import search from "../../imgs/categoryimgs/search.png";
import select from "../../imgs/categoryimgs/select.png";
import line from "../../imgs/categoryimgs/line.png";
import loading from "../../imgs/categoryimgs/u680.svg";
import pic01 from "../../imgs/categoryimgs/pic01.png";
import pic02 from "../../imgs/categoryimgs/pic02.png";
import pic03 from "../../imgs/categoryimgs/pic03.png";
import pic04 from "../../imgs/categoryimgs/bao01.png";
import pic05 from "../../imgs/categoryimgs/egg01.png";
import pic06 from "../../imgs/categoryimgs/flute01.png";
import pic07 from "../../imgs/categoryimgs/flute02.png";
import pic08 from "../../imgs/categoryimgs/hufu01.png";
import pic09 from "../../imgs/categoryimgs/hufu02.png";
import pic10 from "../../imgs/categoryimgs/meat01.png";
import pic11 from "../../imgs/categoryimgs/nv01.jpg";
import pic12 from "../../imgs/categoryimgs/xia01.png";
import pic13 from "../../imgs/categoryimgs/xia02.png";
import pic14 from "../../imgs/categoryimgs/xie01.png";

import store from "../../store";

import {
  initCategoryLeftNavAction,
  initCategoryRightNavAction,
  initCategoryDataAction,
} from "../../store/actionCreators";
import { connect } from "react-redux";
import { getNavTit, getGoodsData } from "../../axios/axios";
import TarBar from "../comm/Tabbar/Tabbar";

class Category extends Component {
  state = {
    title: "商城",
    left_tit: "热销爆品",
    navItems: [],
    icon: [
      search,
      select,
      line,
      loading,
      pic01,
      pic02,
      pic03,
      pic04,
      pic05,
      pic06,
      pic07,
      pic08,
      pic09,
      pic10,
      pic11,
      pic12,
      pic13,
      pic14,
    ],
    leftCurrentIndex: 1,
    rightCurrentIndex: 1,
    leftCurrentType: "hot",
    CurrentGoods: [],
    type: [],
  };
  componentDidMount() {
    getNavTit().then((res) => {
      this.setState({
        navItems: res.data,
      });
      console.log(res.data);
    });
    getGoodsData().then((res) => {
      let category = res.data;
      category = category[0];
      this.setState({
        CurrentGoods: category.hot,
      });
      console.log(res.data, category);
    });
    store.dispatch(initCategoryLeftNavAction());
    store.dispatch(initCategoryRightNavAction());
    store.dispatch(initCategoryDataAction());
  }
  handleLeftClick = (params) => {
    console.log(params);
    let category = this.props.category;
    category = category[0];
    // console.log(category);
    let CurrentGoods = this.state.CurrentGoods;
    let leftNav = this.props.leftNav;
    leftNav.map((v, index) => {
      let type = v.type;
      this.state.type.push(type);
      // console.log(this.state.type);
      return this.state.type;
    });
    CurrentGoods = category[this.state.type[params - 1]];
    console.log(category[this.state.type[params - 1]]);
    console.log(this.state.type);

    this.setState({
      leftCurrentIndex: params,
      CurrentGoods: CurrentGoods,
    });
  };
  handleRightClick = (params) => {
    console.log(params);
    this.setState({
      rightCurrentIndex: params,
    });
  };
  ChangePage = (params) => {
    this.props.history.push("/select");
  };
  GoInfo = (params) => {
    this.props.history.push("/cart" ? "/detailsGroup" : "/productdetails");
  };
  render() {
    let leftNav = this.props.leftNav || [];
    // let rightNav = this.props.rightNav || [];
    // let category = this.props.category || [];
    return (
      <div className="warp">
        <div className="box">
          <div className="header">
            <h1>{this.state.title}</h1>
            <div className="inputBox">
              <input type="text" className="search" placeholder="搜索商品" />
              <i>
                <img src={this.state.icon[0]} alt="" />
              </i>
            </div>
          </div>
          <div className="main">
            <div className="left">
              {/* <h3>
                <img src={this.state.icon[1]} alt="" />
                <span>{this.state.left_tit}</span>
              </h3> */}
              <ul className="navList">
                {leftNav.map((v) => {
                  return (
                    <li
                      className={
                        v.id === this.state.leftCurrentIndex
                          ? "goodsItem active"
                          : "goodsItem"
                      }
                      key={v.id}
                      onClick={this.handleLeftClick.bind(this, v.id)}
                    >
                      {v.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right">
              <div className="navbar">
                {this.state.navItems.map((v) => {
                  return (
                    <span
                      className={
                        v.id === this.state.rightCurrentIndex
                          ? "navItem active"
                          : "navItem"
                      }
                      key={v.id}
                      onClick={this.handleRightClick.bind(this, v.id)}
                    >
                      {v.title}
                    </span>
                  );
                })}
                <i onClick={this.ChangePage}>
                  <img src={this.state.icon[1]} alt="" />
                </i>
              </div>
              <div className="goods_box">
                {this.state.CurrentGoods.map((v) => {
                  return (
                    <div
                      className="goods"
                      key={v.id + Math.random()}
                      onClick={this.GoInfo}
                    >
                      <div className="goods_left">
                        <img src={v.img} alt="" />
                      </div>
                      <div className="goods_right">
                        <span className="goods_tit">{v.tit}</span>
                        <i className="goods_dubTit">{v.dub_tit}</i>
                        <div className="goods_act">
                          <span className="act">{v.act}</span>
                          <span className="ove_pay">{v.over_pay}</span>
                        </div>
                        <div className="goods_pay">
                          <span className="pay">{"￥" + v.pay}</span>
                          <span className="origin_pay">{v.origin_pay}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="loading">
                  <img src={this.state.icon[3]} alt="" />
                  <span>正在加载</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TarBar></TarBar>
        {/* pic 页面商品图引入链接用 */}
        <div className="pic_box">
          <img src={this.state.icon[4]} alt="" />
          <img src={this.state.icon[5]} alt="" />
          <img src={this.state.icon[6]} alt="" />
          <img src={this.state.icon[7]} alt="" />
          <img src={this.state.icon[8]} alt="" />
          <img src={this.state.icon[9]} alt="" />
          <img src={this.state.icon[10]} alt="" />
          <img src={this.state.icon[11]} alt="" />
          <img src={this.state.icon[12]} alt="" />
          <img src={this.state.icon[13]} alt="" />
          <img src={this.state.icon[14]} alt="" />
          <img src={this.state.icon[15]} alt="" />
          <img src={this.state.icon[16]} alt="" />
          <img src={this.state.icon[17]} alt="" />
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    leftNav: state.catLftNavReducer.leftNav,
    rightNav: state.catRightNavReducer.rightNav,
    category: state.catReducer.category,
  };
}, null)(withRouter(Category));
