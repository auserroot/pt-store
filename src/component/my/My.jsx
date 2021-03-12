/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import store from "../../store";
import {
  myInitBalanceAction,
  myInitIconAction,
  myInitIconsAction,
  myInitUserAction,
} from "../../store/actionCreators/myAction";
import "../../icon/font.css";
import style from "./My.module.scss";
import { connect } from "react-redux";
import ReactDOM from "react-dom";

import TabBar from "../comm/Tabbar/Tabbar";

//头部标签
function Header(props) {
  return (
    <div className={style.myHeader}>
      <span>我的</span>
    </div>
  );
}

//粉色div
function Pinkbox(props) {
  return (
    <div className={style.pinkbox}>
      <a className={style.headPortrait}>
        <img src={props.user.src} alt="#" onClick={props.infoRouter} />
      </a>
      <div className={style.userName}>
        <span>{props.user.name}</span>
        <span>{props.user.UID}</span>
      </div>
      <div className={style.invite}>
        <a onClick={props.handelClick} className={style.link}>
          邀请有礼
        </a>
      </div>
    </div>
  );
}

//账号
function Account(props) {
  console.log(props.balance);
  return (
    <div className={style.accountBox}>
      {props.balance
        ? props.balance.map((e) => {
            return (
              <div className={style.accBox} key={e.title}>
                <a className={style.number}>{e.data}</a>
                <a className={style.title}>{e.title}</a>
              </div>
            );
          })
        : console.log(props.balance)}
    </div>
  );
}

//
function Orderscentre(props) {
  console.log(props.icon);
  return (
    <div className={style.orderscentre}>
      <div className={style.ordershead}>
        <span className={style.ordertitle}>订单中心</span>
        <span className={style.ordermore}>{"查看更多" + ">"}</span>
      </div>
      <div className={style.ordernext}>
        {props.icon
          ? props.icon.map((e) => {
              return (
                <div
                  className={style.iconBox}
                  key={e.class}
                  onClick={props.orderRouter}
                >
                  <a className={"iconfont " + e.class + " " + style.icon}> </a>
                  <a className={style.title}>{e.title}</a>
                </div>
              );
            })
          : console.log(props.icon)}
      </div>
    </div>
  );
}

//bargain
function Bargain() {
  return (
    <div className={style.bargain}>
      <img src="http://cloud.axureshop.com/gsc/EHWWNA/ff/7a/34/ff7a34d622a349d09ad75702612f8295/images/%E6%88%91%E7%9A%84/u3563.png?token=2e3154bd3b1a9b51e0d15051f8360f0bd332c7b68137182311eb44a29f07092a"></img>
    </div>
  );
}

//service
function Service(props) {
  console.log(props.icons);
  return (
    <div className={style.serviceBox}>
      <div className={style.headline}>我的服务</div>
      <div className={style.service}>
        {props.icons
          ? props.icons.map((e) => {
              return (
                <div className={style.iconBox} key={e.class}>
                  <a className={"iconfont " + e.class + " " + style.icon}> </a>
                  <a className={style.title}>{e.title}</a>
                </div>
              );
            })
          : console.log(props.icons)}
      </div>
    </div>
  );
}
//邀请
function Pop(props) {
  // const [self, setSelf] = useState(false);
  return ReactDOM.createPortal(
    <div>
      <div
        className={props.data ? style.model : style.model + " " + style.hidden}
        onClick={props.handelClick}
      >
        <div className={style.modelItem}>
          <div className={style.title}>
            {/* <h2>邀请</h2> */}
            <i onClick={props.handelClick}>X</i>
          </div>
          <div className={style.imgbox}>
            <img
              src="http://cloud.axureshop.com/gsc/EHWWNA/ff/7a/34/ff7a34d622a349d09ad75702612f8295/images/%E9%A6%96%E9%A1%B5/u1081.png?token=aa77383a421128ca02bb28cedfa319231db73092ad926501025aff0e3bfe169b"
              alt="#"
            />
          </div>
          <div className={style.weChat}>
            <div className={style.box_f}>
              <img
                src="http://cloud.axureshop.com/gsc/EHWWNA/ff/7a/34/ff7a34d622a349d09ad75702612f8295/images/%E9%A6%96%E9%A1%B5/u1095.png?token=dd50c8d349697c6b7ad5f0f9c17c261248bdf80ab306163784a93840d2e4c662"
                alt="#"
              />
              <span>微信好友</span>
            </div>
            <div className={style.box_f}>
              <img
                src="http://cloud.axureshop.com/gsc/EHWWNA/ff/7a/34/ff7a34d622a349d09ad75702612f8295/images/%E9%A6%96%E9%A1%B5/u1087.png?token=aa0f9306e361471be09cf9c90eb049db58dc8f2f27779aba1891b3a0d3f67de2"
                alt="#"
              />
              <span>朋友圈</span>
            </div>
            <div className={style.box_f}>
              <img
                src="http://cloud.axureshop.com/gsc/EHWWNA/ff/7a/34/ff7a34d622a349d09ad75702612f8295/images/%E9%A6%96%E9%A1%B5/u1098.png?token=00e54ea39b8f30232160dd33d3d0a056ac340d2e602eb007fb8a416ef5f01ee7  "
                alt="#"
              />
              <span>QQ</span>
            </div>
            <div className={style.box_f}>
              <img
                src="http://cloud.axureshop.com/gsc/EHWWNA/ff/7a/34/ff7a34d622a349d09ad75702612f8295/images/%E9%A6%96%E9%A1%B5/u1103.png?token=c82238cbca0a0ac00ac26a60e642c06b8cfbb10ed7b5b4f6fed3e13bead3f41b"
                alt="#"
              />
              <span>QQ空间</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function My(props) {
  const [data, setData] = useState(false);
  //
  useEffect(() => {
    const balanceData = async () => {
      store.dispatch(myInitBalanceAction());
    };
    balanceData();
  }, []);
  //
  useEffect(() => {
    const iconData = async () => {
      store.dispatch(myInitIconAction());
    };
    iconData();
  }, []);
  //
  useEffect(() => {
    const iconsData = async () => {
      store.dispatch(myInitIconsAction());
    };
    iconsData();
  }, []);
  //
  useEffect(() => {
    const userData = async () => {
      store.dispatch(myInitUserAction());
    };
    userData();
  }, []);
  // console.log(props.iconsData.icons);
  const handelClick = function () {
    setData(!data);
  };
  //
  const infoRouter = function () {
    props.history.push("/myinfo");
  };
  const orderRouter = function () {
    props.history.push("/myorder");
  };
  if (props.userData.user) {
    return (
      <div>
        <Header></Header>
        <Pinkbox
          handelClick={handelClick}
          infoRouter={infoRouter}
          user={props.userData.user}
        ></Pinkbox>
        <Account balance={props.swiperData.balance}></Account>
        <Orderscentre
          icon={props.iconData.icon}
          orderRouter={orderRouter}
        ></Orderscentre>
        <Bargain></Bargain>
        <Service icons={props.iconsData.icons}></Service>
        <Pop data={data} handelClick={handelClick}></Pop>
        <TabBar></TabBar>
      </div>
    );
  } else {
    return <h1>LOADING....</h1>;
  }
}

export default connect((state) => {
  return {
    swiperData: state.myReducer.swiperData,
    iconData: state.myReducer.iconData,
    iconsData: state.myReducer.iconsData,
    userData: state.myReducer.userData,
  };
}, null)(My);
