import React, { useState,useEffect} from 'react'
import {loge} from "@/cofing/index"
import Icon from "@/components/Icon"
import { Button } from 'antd'
import {  useDispatch} from 'react-redux'
import './index.less'
// 标题组件
const header:React.FC<{title:string}>=({title="我是头部"})=>{
  const dispatch = useDispatch()
    return (
      <div className="edit-header flex-between">
        <Icon type="icon-React" style={{fontSize:"33px"}} />
        <div>
          {/* <Button onClick={()=>dispatch({type:"showWord"})}>编辑</Button> */}
        <a>
        <Icon type="icon-github" style={{fontSize:"24px",margin:'20px'}} />
        </a>
        </div>
      </div>
    )
}
export default  header;