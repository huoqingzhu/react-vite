import React, { useState,useEffect} from 'react'
import {loge} from "@/cofing/index"
import { Button } from 'antd'
import {  useDispatch} from 'react-redux'
import './index.less'
// 标题组件
const header:React.FC<{title:string}>=({title="我是头部"})=>{
  const dispatch = useDispatch()
    return (
      <div className="edit-header flex-between">
        <img src={loge} alt="" className="loge"  />
        <Button onClick={()=>dispatch({type:"showWord"})}>编辑</Button>
      </div>
    )
}
export default  header;