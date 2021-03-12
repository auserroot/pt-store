/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable array-callback-return */
//购物车管理
import React from "react";
import "./Cartmanage.scss";
import "../cartIcon.css";
import Header from "../../comm/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  changeManageSelectAction,
  manageAllSelectAction,
  delGoodsAction,
} from "../../../store/action";
import { Toast, Modal } from "antd-mobile";

export default () => {
  let goodsList = useSelector((store) => store.cart.goodsList);
  let dispatch = useDispatch();
  const [totalSelected, setTotalSelected] = useState(false);

  //判断是否应该全选
  function isAllSelected() {
    if (goodsList.length <= 0) {
      setTotalSelected(false);
    } else {
      setTotalSelected(
        goodsList.every((el) => {
          return el.manage_selected === true;
        })
      );
    }
  }
  useEffect(() => {
    isAllSelected();
    return undefined;
  }, [goodsList]);

  //单选
  function handleSelect(idx) {
    let flag = goodsList[idx].manage_selected;
    dispatch(changeManageSelectAction({ idx, flag }));
  }

  //全选
  function handleAllSelect() {
    let flag = totalSelected;
    dispatch(manageAllSelectAction({ flag }));
  }

  //移入收藏夹
  function moveToCollection() {
    if (
      goodsList.some((el) => {
        return el.manage_selected === true;
      })
    ) {
      Toast.success("移入收藏夹成功", 1);
    } else {
      Toast.info("请选择想要收藏的商品", 1);
    }
  }

  //删除
  function delGoods() {
    if (
      goodsList.some((el) => {
        return el.manage_selected === true;
      })
    ) {
      Modal.alert("删除", "确定要删除选中的商品吗？", [
        { text: "取消", onPress: () => console.log("cancel") },
        {
          text: "确定",
          onPress: () => dispatch(delGoodsAction()),
        },
      ]);
    } else {
      Toast.info("请选择需要删除的商品", 1);
    }
  }

  function renderGoodsList() {
    let goodsArr = [];
    goodsList.map((el, idx) => {
      goodsArr.push(
        <div className="cart-goods-item" key={idx}>
          <i
            className={
              el.manage_selected
                ? "iconfont icon-xuanzhongduigou"
                : "iconfont icon-weixuanzhong"
            }
            onClick={() => {
              handleSelect(idx);
            }}
          ></i>
          <img src={el.goods_img} alt="" />
          <div className="cart-goods-detail">
            <div className="cart-goods-name">
              {el.goods_name + "(" + el.is_breaks + ")"}
            </div>
            <div className="cart-goods-type">
              {`颜色：${el.goods_color}；类型：${el.goods_type}`}
            </div>
            <div className="cart-goods-bottom">
              <div className="cart-goods-price">
                <span>{"￥" + el.goods_price}</span>
                <span>{"￥" + el.goods_old_price}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return goodsArr;
  }
  return (
    <div className="cart-manage">
      <Header title="购物车管理" back />
      <div className="cart-content">
        <div className="cart-content-top">
          <div className="cart-content-top-left">购物满666.00元，可减30.00</div>
          <div className="cart-content-top-right">{"去凑单>"}</div>
        </div>
        <div className="cart-goods">{renderGoodsList()}</div>
      </div>
      <div className="cart-manage-footer">
        <div className="select-all">
          <i
            className={
              totalSelected
                ? "iconfont icon-xuanzhongduigou"
                : "iconfont icon-weixuanzhong"
            }
            onClick={() => {
              handleAllSelect();
            }}
          ></i>
          <span>全选</span>
        </div>
        <button
          className="to-collect"
          onClick={() => {
            moveToCollection();
          }}
        >
          移入收藏夹
        </button>
        <button
          className="del"
          onClick={() => {
            delGoods();
          }}
        >
          删除
        </button>
      </div>
    </div>
  );
};
