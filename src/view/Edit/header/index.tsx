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
        <Button onClick={()=>dispatch({type:"showWord"})}>编辑</Button>
      </div>
    )
}
export default  header;