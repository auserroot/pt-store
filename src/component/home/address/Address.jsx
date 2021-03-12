// 定位
import React, { Component } from 'react';
import PtHeader from "../../common/pt-header/pt-header"
import "../homes/ptfont.css"
import "./Address.scss"
class Address extends Component {
    render() {
        return (
            <div className="address">
                <PtHeader title="选择收貨地址" back={true} AD={true}></PtHeader>
            <dl>
                <dt> <input type="text" placeholder="请输入您的收货地址"/></dt>
                <dd>
                <p>送至</p>
            <div><span className="iconfont icon-dizhi">丽美小区</span><span>当前定位</span> </div>
            <p>我的收货地址</p>
            <ul>
                <li>龙金大道302号</li>
                <li>木子13800000000</li>
            </ul>
            <p>附近地址</p>
            <ul>
                <li> 静安丽景小区</li>
                <li>横坡小区</li>
                <li> 恒数新城小区</li>
                <li> 宝美小区</li>
                <li> 静安丽景小区</li>
                <li>横坡小区</li>
                <li> 恒数新城小区</li>
                <li> 宝美小区</li>
            </ul>
                </dd>
            </dl>

            </div>
        );
    }
}

export default Address;
