import React, { useState,useEffect} from 'react'
import {article} from "../../api/apis"
import Draw from "./drawing/index"
import Word from "./word/index"
import Header from "./header/index"
import  "./index.less"
/**
 * 计数器组件
 * @param param0 
 */
const Home:React.FC<{ initial: number }> = ({ initial = 0 }) => {
  const [count, setCount] = useState<number>(initial)
  const add=(value:number)=>{
        setCount(count+value)
      }
      useEffect(()=>{
      article().then(res=>{
        console.log(res)
      })
      },[])
  return (
    <div className="edit">
      <Header title="我是导航栏" />
      <Draw title="我是画布" />
      <Word title="我是侧边栏" />
    </div>
  )
}
export default Home