import React, { useState,useEffect} from 'react'
import './index.less'
// 标题组件
const word:React.FC<{title:string}>=({title="我是编辑"})=>{
    return (
      <div className="word">
        {title}
      </div>
    )
}
export default word;