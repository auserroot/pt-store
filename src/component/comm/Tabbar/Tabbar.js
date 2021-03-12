import './tabbar.scss'
import { tabbarItem } from './tabbarItem'
import './tabbarIcon.css'
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=> {
  let h = useHistory()
  const [tabbarArr, setTabbarArr] = useState('')
  const [path, setPath] = useState(h.location.pathname)
  useEffect(()=>{
    setTabbarArr(tabbarItem.map(el=>{
      let active = (el.path === path) ? ' tabbar-active' : ''
      return(
        <div 
          className={'tabbar-item' + active} 
          key={el.id} 
          onClick={()=>{
            h.push(el.path)
            setPath(h.location.pathname)
          }}>
          <span className={'iconfont ' + el.icon} ></span>
          <span>{el.name}</span>
        </div>
      )
    }))
    return undefined
  }, [])
  return (
    <div className='tabbar'>
      {tabbarArr}
    </div>
  )
}