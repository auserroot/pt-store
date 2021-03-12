import React from "react";
import Header from '../comm/Header/Header'
import './cart.scss'
import './cartIcon.css'
import Tabbar from '../comm/Tabbar/Tabbar'
import { useEffect, useState } from 'react'
import { getCartMsgAction,changeSelectAction,allSelectAction,addGoodsAction,subGoodsAction } from '../../store/action'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Cart = ()=> {
  //初始化history hook
  let h = useHistory()

  //与仓库建立联系
  let goodsList = useSelector(store=>store.cart.goodsList)
  let dispatch = useDispatch()

  //触发dispatch调接口
  useEffect(() => {
    dispatch(getCartMsgAction('001'))
    return undefined
  }, [])

  //定义总价 是否全选
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalSelected, setTotalSelected] = useState(false)

  //计算总价的函数
  function final_price() {
    let price = 0
    for(let i in goodsList) {
      if(goodsList[i].selected) {
        price += goodsList[i].goods_price * goodsList[i].cart_num
      }
    }
    setTotalPrice(price)
  }
  
  //当goodsList改变时计算总价，判断是否应该全选
  useEffect(() => {
    if(goodsList.length<=0){
      setTotalSelected(false)
    }else{
      setTotalSelected(goodsList.every(el=>{
        return el.selected === true
      }))
    }
    final_price()
    return undefined
  }, [goodsList]);

  //单个商品的选择事件
  function handleSelect(idx) {
    let flag = goodsList[idx].selected
    dispatch(changeSelectAction({ idx, flag }))
  }

  //全选按钮
  function handleAllSelect() {
    let flag = totalSelected
    dispatch(allSelectAction({flag}))
  }

  //增加商品数量
  function addGoodsNum(idx) {
    let num = 1
    dispatch(addGoodsAction({idx, num}))
  }

  //减少商品数量
  function subGoodsNum(idx) {
    let num = 1
    dispatch(subGoodsAction({idx, num}))
  }

  //购物车商品渲染
  function renderGoodsList() {
    let goodsArr = []
    goodsList.map((el, idx)=>{
      goodsArr.push(
        <div className="cart-goods-item" key={idx}>
          <i className={el.selected ? 'iconfont icon-xuanzhongduigou' : 'iconfont icon-weixuanzhong'} onClick={()=>{handleSelect(idx)}}></i>
          <img src={el.goods_img} alt="" />
          <div className='cart-goods-detail'>
            <div className='cart-goods-name'>
              {el.goods_name+'('+ el.is_breaks +')'}
            </div>
            <div className='cart-goods-type'>
              {`颜色：${el.goods_color}；类型：${el.goods_type}`}
            </div>
            <div className='cart-goods-bottom'>
              <div className='cart-goods-price'>
                <span>
                  {'￥'+el.goods_price}
                </span>
                <span>
                  {'￥'+el.goods_old_price}
                </span>
              </div>
              <div className='cart-goods-num'>
                <button onClick={()=>{
                  subGoodsNum(idx)
                }}>-</button>
                <span>{el.cart_num}</span>
                <button onClick={()=>{addGoodsNum(idx)}}>+</button>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return goodsArr
  }

  //去结算
  function toOrder() {
    if(goodsList.some(el=>{
      return el.selected === true
    })){
      h.push('/cart/order')
    }
  }

  return (
    <div className='cart'>
      <Header title='购物车' h />
      <div className='cart-content'>
        <div className="cart-content-top">
          <div className='cart-content-top-left'>
            购物满666.00元，可减30.00
          </div>
          <div className='cart-content-top-right'>
            {'去凑单>'}
          </div>
        </div>
        <div className="cart-goods">
          {renderGoodsList()}
        </div>
      </div>
      <div className="cart-footer">
        <div className='cart-check-all'><i className={totalSelected?'iconfont icon-xuanzhongduigou':'iconfont icon-weixuanzhong'} onClick={()=>{handleAllSelect()}}></i>全选</div>
        <div className='cart-select-price'>
          合计：<span>{'￥'+Number(totalPrice).toFixed(2)}</span>
        </div>
        <span className='cart-settlement' onClick={()=>{
          toOrder()
        }}>
          去结算
        </span>
      </div>
      <Tabbar />
    </div>
  )
}

export default Cart;
