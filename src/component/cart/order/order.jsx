/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
//填写订单
import React from "react";
import "./order.scss";
import "./orderIcon.css";
import Header from "../../comm/Header/Header";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCouponMsgAction } from "../../../store/action";
import { Modal } from "antd-mobile";

export default function () {
  let h = useHistory();
  let dispatch = useDispatch();
  let goods = useSelector((store) => store.cart.goodsList);
  let coupons = useSelector((store) => store.cart.couponList);
  let { couponPrice } = useSelector((store) => store.cart);
  goods = goods.filter((el) => {
    return el.selected === true;
  });

  //未使用优惠券之前的价格
  let originPrice = 0;
  goods.map((el) => {
    originPrice += el.goods_price * el.cart_num;
  });
  originPrice = Number(originPrice).toFixed(2);

  //初始化请求优惠券信息
  useEffect(() => {
    dispatch(getCouponMsgAction("001"));
    return undefined;
  }, []);

  //判断是否有可用的优惠券
  function judgeUsefulCoupon() {
    if (
      coupons.some((el) => {
        return el.is_over_time === "no" && el.coupon_type === "无门槛";
      })
    ) {
      return true;
    } else {
      return false;
    }
  }

  //点击支付
  function handlePay() {
    Modal.alert("支付", "确定要购买吗？", [
      {
        text: "放弃支付",
        onPress: () => {
          h.push("/cart/paystatus/fail");
        },
      },
      {
        text: "确认支付",
        onPress: () => {
          h.push("/cart/paystatus/success");
        },
      },
    ]);
  }

  function renderGoodsList() {
    let res = [];
    // eslint-disable-next-line array-callback-return
    goods.map((el, idx) => {
      res.push(
        <div className="goods-item" key={idx}>
          <img src={el.goods_img} alt="" />
          <div className="goods-msg">
            <div className="goods-name">
              {`${el.goods_name}(${el.is_breaks})`}
            </div>
            <div className="goods-type">
              {`颜色：${el.goods_color}；类型：${el.goods_type}`}
            </div>
            <div className="goods-bottom">
              <div className="goods-price">
                <span>{"￥" + el.goods_price}</span>
                <span>{"￥" + el.goods_old_price}</span>
                {` x${el.cart_num}`}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return res;
  }

  return (
    <div className="order">
      <Header back title="填写订单" />
      <div className="user-msg">
        <i className="iconfont icon-didian"></i>
        <div className="user-main-msg">
          <div className="user-name-phone">木子 13688991010</div>
          <div className="user-address">北京市海淀区李子村北三胡同</div>
        </div>
        <i className="iconfont icon-right"></i>
      </div>
      <div className="order-goods">{renderGoodsList()}</div>
      <div className="order-fare">
        <div className="total-fare">
          <span>商品总价</span>
          <span>{"￥" + originPrice}</span>
        </div>
        <div className="coupons">
          <span>优惠券</span>
          <span
            onClick={() => {
              h.push("/cart/coupon");
            }}
          >
            {couponPrice > 0
              ? `-￥${Number(couponPrice).toFixed(2)}`
              : judgeUsefulCoupon()
              ? "发现可用的优惠券"
              : "暂时没有优惠券噢"}
          </span>
        </div>
        <div className="courier-fare">
          <span>运费（快递）</span>
          <span>{"￥0.00"}</span>
        </div>
        <div className="courier-protect">
          <span>运费险</span>
          <span>{"￥0.00"}</span>
        </div>
        <div className="final-fare">
          ￥{Number(originPrice - couponPrice).toFixed(2)}
        </div>
      </div>
      <div className="order-pay">
        <div className="fare-need-pay">
          <span>付款</span>
          <span>￥{Number(originPrice - couponPrice).toFixed(2)}</span>
        </div>
        <div
          className="pay-fare"
          onClick={() => {
            handlePay();
          }}
        >
          去支付
        </div>
      </div>
    </div>
  );
}
