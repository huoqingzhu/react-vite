import React, { useState,useEffect} from 'react'
import {loge} from "@/cofing/index"
import { Button } from 'antd'
import './index.less'
// 标题组件
const header:React.FC<{title:string}>=({title="我是头部"})=>{
    return (
      <div className="edit-header flex-between">
        <img src={loge} alt="" className="loge"  />
        <Button>编辑</Button>
      </div>
    )
}
export default  header;