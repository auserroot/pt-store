import React from 'react'
import './header.css'
import './headerIcon.css'
import { useHistory } from 'react-router-dom'

export default (props)=> {
  let h = useHistory()
  return (
    <div className='header'>
      {
        props.back ? <i className='iconfont icon-fanhui' onClick={()=>{h.go(-1)}}></i> : ''
      }
      <h2>{props.title}</h2>
      {
        props.title === '购物车' ? <span onClick={()=>{h.push('/cart/manage')}}>管理</span> : ''
      }
    </div>
  )
}