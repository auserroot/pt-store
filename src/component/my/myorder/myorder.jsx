/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
// 订单中心
import React, { Component, useState, useEffect } from "react";
// import ReactDOM from 'react-dom'
import { SegmentedControl, WingBlank } from "antd-mobile";
import style from "./myorder.module.scss";
import store from "../../../store";
import { myInitOrderAction } from "../../../store/actionCreators/myorderAction";
import { connect } from "react-redux";

class SegmentedControlExample extends Component {
  onChange = (e) => {
    this.props.stateChange(e.nativeEvent.selectedSegmentIndex);
  };
  render() {
    return (
      <WingBlank size="lg" className="sc-example">
        <SegmentedControl
          selectedIndex={0}
          tintColor={"green"}
          values={["全部", "待付款", "代发货", "待收货", "待评价"]}
          onChange={this.onChange}
        />
      </WingBlank>
    );
  }
}

function Order(props) {
  const judge = function () {
    if (props.e.start == 1) {
      return "待付款";
    } else if (props.e.start == 2) {
      return "待发货";
    } else if (props.e.start == 3) {
      return "待收货";
    } else if (props.e.start == 4) {
      return "待评价";
    }
  };
  const judges = function () {
    if (props.e.start == 1) {
      return "立即付款";
    } else if (props.e.start == 2) {
      return "提醒发货";
    } else if (props.e.start == 3) {
      return "确认收货";
    } else if (props.e.start == 4) {
      return "申请售后";
    }
  };
  const judgess = function () {
    if (props.e.start == 1) {
      return "取消订单";
    } else if (props.e.start == 2) {
      return "取消订单";
    } else if (props.e.start == 3) {
      return "查看物流";
    } else if (props.e.start == 4) {
      return "查看物流";
    }
  };
  return (
    <div className={style.orderbox}>
      <div className={style.orderhead}>
        <span>订单号：{props.e.orderID}</span>
        <span>{judge()}</span>
      </div>
      <div className={style.ordercenter}>
        <div className={style.imgbox}>
          <img src={props.e.orderSrc} alt="" />
        </div>
        <div className={style.describe}>
          <p>{props.e.description}</p>
          <p>规格：{props.e.size}</p>
          <div className={style.price}>
            <span>
              ￥{props.e.newPrice}
              <i>{props.e.lastPrice}</i>
            </span>
            <b>X{props.e.number}</b>
          </div>
        </div>
      </div>
      <div className={style.orderbottom}>
        <div className={style.total}>
          <span>共计{props.e.number}件商品</span>
          <span>
            合计：<i>￥{props.e.number * props.e.newPrice}</i>
          </span>
        </div>
        <div className={style.buttons}>
          <button>联系客服</button>
          <button>{judgess()}</button>
          <button>{judges()}</button>
        </div>
      </div>
    </div>
  );
}

function myorder(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState(0);
  // const [data,setData] = useState([])
  const stateChange = function (e) {
    setState(e);
    console.log(state);
  };
  const orderData = async () => {
    store.dispatch(myInitOrderAction());
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    orderData();
  }, []);
  // console.log(props.orderData)
  // function staterchange(){
  //   var data = []
  //   props.orderData.order.map((e)=>{
  //     if(e.start==0){
  //       data=props.orderData.order
  //     }else if(e.start==state){
  //       data.push(e)
  //     }
  //   })
  //   return data
  // }
  // if(props.orderData.order){
  //   console.log(props.orderData)
  // setData(staterchange())
  // }
  const GoBack = function () {
    props.history.push("./my");
  };

  if (props.orderData.order) {
    return (
      <div>
        <div className={style.ordertitle}>
          <i onClick={GoBack}>{"<"}</i>
          <span>订单中心</span>
          <span></span>
        </div>
        <SegmentedControlExample
          stateChange={stateChange}
        ></SegmentedControlExample>
        {/* <Order order={props.orderData.order}></Order> */}
        {/* <Order></Order> */}
        {props.orderData.order.map((e) => {
          if (state === 0) {
            return <Order e={e} key={e.orderID}></Order>;
          } else if (e.start == state) {
            return <Order e={e} key={e.orderID}></Order>;
          }
        })}
      </div>
    );
  } else {
    return <h1>LOADING....</h1>;
  }
}
export default connect((state) => {
  return {
    orderData: state.myorderReducer.orderData,
  };
}, null)(myorder);
