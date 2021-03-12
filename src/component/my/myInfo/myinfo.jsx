/* eslint-disable jsx-a11y/alt-text */
// 我的资料
// import React, { Component } from 'react'
// import { Input } from 'antd';
import style from "./myinfo.module.scss";

function Myinfo(props) {
  return (
    <div className={style.myinfo}>
      <div className={style.headtitle}>
        <a href="#/my">{"<"}</a>
        <span>我的资料</span>
        <span></span>
      </div>
      <div className={style.itembox}>
        <span>头像</span>
        <img src="http://cloud.axureshop.com/gsc/EHWWNA/ff/7a/34/ff7a34d622a349d09ad75702612f8295/images/%E6%88%91%E7%9A%84/u3557.png?token=c3d60981b535dd4e3e8376a550c452cab3a0fed8cedfb46cad531ed70dd76f80"></img>
      </div>
      <div className={style.itembox}>
        <span>用户昵称</span>
        <span>USER</span>
      </div>
      <div className={style.itembox}>
        <span>账号</span>
        <span>123456</span>
      </div>
      <div className={style.itembox}>
        <span>地区</span>
        <span>请输入</span>
      </div>
    </div>
  );
}
export default Myinfo;
