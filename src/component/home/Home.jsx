// @ts-nocheck
import React, { Component } from "react";
import store from "../../store";
import { homeInitSwiperDataAction } from "../../store/action/homeAction";
import { connect } from "react-redux";
import HomeHead from "./homes/homeHead";
import HomeCenter from "./homes/homeCenter/homeCenter";
import PTSwiper from "../common/pt-swiper/pt-swiper";

// import TarBar from "../comm/Tabbar/Tabbar";

class Home extends Component {
  async componentDidMount() {
    store.dispatch(homeInitSwiperDataAction());
  }
  render() {
    return (
      <div className="ptHome">
        <HomeHead></HomeHead>
        <PTSwiper swiperData={this.props.swiperData}></PTSwiper>
        <HomeCenter></HomeCenter>
        {/* <TarBar></TarBar> */}
      </div>
    );
  }
}
export default connect((state) => {
  return {
    swiperData: state.homeReducer.swiperData,
  };
}, null)(Home);
