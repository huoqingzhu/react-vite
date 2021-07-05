import React, { useState,useEffect} from 'react'
// 标题组件
const word:React.FC<{title:string}>=({title="我是编辑"})=>{
    return (
      <div className="title">
        {title}
      </div>
    )
}
export default word;