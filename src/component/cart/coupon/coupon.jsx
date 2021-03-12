//优惠券
import React from 'react'
import './coupon.scss'
import Header from '../../comm/Header/Header'
import { useSelector, useDispatch }from 'react-redux'
import { useHistory } from 'react-router-dom'
import { touchUseCouponAction } from '../../../store/action'

export default () => {
  let coupons = useSelector(store=>store.cart.couponList)
  let dispatch = useDispatch()
  let h = useHistory()
  //点击使用优惠券
  function handleUseCoupon(el){
    dispatch(touchUseCouponAction(el.coupon_price))
    h.go(-1)
  }

  //判断优惠券是否可以使用
  function judgeUsefulCoupon(el) {
    if(el.is_over_time==='no'){
      if(el.coupon_type==='无门槛'){
        return (
            <div className="coupon-use" onClick={()=>{handleUseCoupon(el)}}>
              去使用
            </div>
        )
      }else{
        return (
            <div className="coupon-use" style={{backgroundColor: '#ccc'}}>
              去使用
            </div>
        )
      }
    }else{
        return (
          <div className="coupon-use" style={{backgroundColor: '#ccc'}}>
            已过期
          </div>
      )
    }
  }

  function renderCouponList(){
    let res= []
    coupons.map((el,idx)=>{
      res.push(
        <div className="coupon-item" key={idx}>
          <div className='coupon-img'>
            <img src={el.coupon_img} alt=""/>
            {el.coupon_type==='无门槛' ? <span>无门槛券</span>:''}
          </div>
          <div className="coupon-center">
            <div className="coupon-name">
              {el.coupon_name}
            </div>
            <div className="coupon-type">
              {el.coupon_type}
            </div>
            <div className="coupon-over-time">
              {el.coupon_over_time}
            </div>
          </div>
          <div className="coupon-right">
            <div className="coupon-price">
              <span><i>￥</i>{el.coupon_price}</span>
            </div>
            {judgeUsefulCoupon(el)}
          </div>
        </div>
      )
    })
    return res
  }

  return (
    <div className='coupon'>
      <Header title='优惠券' back />
      <div className="coupon-content">
        {renderCouponList()}
      </div>
    </div>
  )
}