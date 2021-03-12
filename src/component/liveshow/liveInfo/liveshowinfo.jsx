//直播详情
import React, { Component } from "react";
import "./liveshowinfo.scss";
import Bg from "../../../imgs/liveshowinfo/bg.jpg";
import UserIcon from "../../../imgs/liveshowinfo/usericon.svg";
import Bag from "../../../imgs/liveshowinfo/bag.svg";
import Shear from "../../../imgs/liveshowinfo/shear.png";
import Love from "../../../imgs/liveshowinfo/love.png";
import Pan from "../../../imgs/liveshowinfo/pan.png";
import { Carousel } from "antd-mobile";
class liveshowinfo extends Component {
  GoToproInfo = (params) => {
    this.props.history.push("/productdetails");
  };
  GoToLiveShow = (params) => {
    this.props.history.push("/liveshow");
  };
  render() {
    return (
      <div className="info_warp">
        <div className="i_w_bg">
          <img className="bg" src={Bg} alt="" />

          <div className="header_item">
            <div className="user_item_info">
              <img src={UserIcon} alt="" />
              <div className="item_t">
                <span className="name">木子</span>
                <span className="p_num">9823人|北京</span>
              </div>
              <div className="item_r">
                <i>+</i>
                <span>关注</span>
              </div>
            </div>

            <div className="u_img">
              <img src={UserIcon} alt="" />
              <img src={UserIcon} alt="" />
              <img src={UserIcon} alt="" />
              <img src={UserIcon} alt="" />
              <img src={UserIcon} alt="" />
              <span onClick={this.GoToLiveShow}>X</span>
            </div>
          </div>

          <div className="act_pro" onClick={this.GoToproInfo}>
            <p className="a_tit">直播专享价</p>
            <img src={Pan} alt="" />
            <p className="a_tit">立减50元</p>
          </div>
        </div>

        <div className="chat">
          <Carousel
            className="my-carousel"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplay
            infinite
          >
            <div className="v-item">carousel 1</div>
            <div className="v-item">carousel 2</div>
            <div className="v-item">carousel 3</div>
          </Carousel>
        </div>

        <div className="item_footer">
          <img onClick={this.GoToproInfo} src={Bag} alt="" />
          <span>一起聊天</span>
          <img src={Shear} alt="" />
          <img src={Love} alt="" />
          <span onClick={this.GoToLiveShow}>X</span>
        </div>
      </div>
    );
  }
}

export default liveshowinfo;
