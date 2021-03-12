//拼团商品详情
import React, { Component } from "react";
import { NavBar, Icon, Carousel } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import "./detailsGroup.scss";
import UserIcon from "../../../imgs/produce/usericon.png";
import Start from "../../../imgs/produce/start.png";
import Home from "../../../imgs/produce/home.png";
import Sever from "../../../imgs/produce/serve.png";
import Shear from "../../../imgs/produce/shear.png";
import AddCart from "../../../imgs/produce/addcart.png";

import Model from "./shearModel";
class Productdetails extends Component {
  state = {
    data: [
      "AiyWuByWklrrUDlFignR",
      "TekJlZRVCjLFexlOCuWn",
      "IJOtIlfsYdTyaDTRVrLI",
    ],
    imgHeight: 176,
    msgs: [1, 2, 3, 4],
    active: false,
  };
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: [
    //       "AiyWuByWklrrUDlFignR",
    //       "TekJlZRVCjLFexlOCuWn",
    //       "IJOtIlfsYdTyaDTRVrLI",
    //     ],
    //   });
    // }, 100);
  }
  handelClick = () => {
    this.setState({
      active: !this.state.active,
    });
  };
  GoToHome = (params) => {
    this.props.history.push("/");
  };
  GoToServe = (params) => {
    this.props.history.push("/sever");
  };
  GoToCart = (params) => {
    this.props.history.push("/cart");
  };
  render() {
    return (
      <div className="warpBox">
        <div className="header_box">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log("onLeftClick")}
          >
            商品详情
          </NavBar>
        </div>

        <div className="w_box">
          <div className="banner">
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) =>
                console.log(`slide from ${from} to ${to}`)
              }
              afterChange={(index) => console.log("slide to", index)}
            >
              {this.state.data.map((val) => (
                <a
                  key={val}
                  href="#/productdetails"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight,
                  }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: "100%", verticalAlign: "top" }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event("resize"));
                      this.setState({ imgHeight: "auto" });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
          <div className="goodsinfo">
            <p className="g_titi">商品名称</p>
            <p className="g_info">商品介绍，商品的卖点、特色</p>
            <p className="g_price">
              <span className="pay">￥128</span>
              <span className="origin_pay">￥228</span>
            </p>
            <div className="productifo">
              <p>
                发货：<span>北京</span>
              </p>
              <p>
                快递：<span>包邮</span>
              </p>
              <p>
                已售：<span>1250件</span>
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="select_box">
            <p className="s_item">
              <span>服务</span>
              <span>7天无理由退货·运费险</span>
              <span>{">"}</span>
            </p>
            <p className="s_item">
              <span>选择</span>
              <span>请选择 颜色分类 尺码</span>
              <span>{">"}</span>
            </p>
            <p className="s_item">
              <span>参数</span>
              <span>品牌 系列...</span>
              <span>{">"}</span>
            </p>
          </div>
          <div className="line"></div>
          <div className="produce_msg">
            <div className="p_tit">
              <span className="good">商品评价（100）</span>
              <span className="good_msg">
                好评率100%<i>{">"}</i>
              </span>
            </div>
            {this.state.msgs.map((i) => {
              return (
                <div className="g_msgs">
                  <div className="user_info">
                    <span className="userIcon">
                      <img src={UserIcon} alt="" />
                      <i>张雅雅</i>
                    </span>
                    <span className="start">
                      <img src={Start} alt="" />
                      <img src={Start} alt="" />
                      <img src={Start} alt="" />
                      <img src={Start} alt="" />
                      <img src={Start} alt="" />
                    </span>
                  </div>
                  <div className="msgs">
                    服务非常棒，3天就拿到商品了，最重要的是，才100多块钱，
                    还免费邮寄，O(∩_∩)O哈哈~
                  </div>
                </div>
              );
            })}
          </div>
          <div className="line"></div>
        </div>

        <div className="footer_bar">
          <div className="icon_box">
            <div className="icon_box_" onClick={this.GoToHome}>
              <img src={Home} alt="" />
              <span>首页</span>
            </div>
            <div className="icon_box_" onClick={this.GoToServe}>
              <img src={Sever} alt="" />
              <span>客服</span>
            </div>
            <div className="icon_box_" onClick={this.handelClick}>
              <img src={Shear} alt="" />
              <span>分享</span>
            </div>
          </div>
          <div className="_but_box">
            <b>
              <img src={AddCart} alt="" />
              加入购物车
            </b>
            <b onClick={this.GoToCart}>立即购买</b>
          </div>
        </div>

        <Model
          active={this.state.active}
          handelClick={this.handelClick}
        ></Model>
      </div>
    );
  }
}

export default Productdetails;
