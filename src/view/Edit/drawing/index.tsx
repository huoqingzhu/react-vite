import React, { useState,useEffect} from 'react'
import './index.less'
// 标题组件
const drawing:React.FC<{title:string}>=({title="我是画板组件"})=>{
    return (
      <div className="edit-draw">
        {title}
      </div>
    )
}
export default drawing;