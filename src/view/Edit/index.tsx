import React from 'react'
import Draw from "./drawing/index"
import Header from "./header/index"
import  "./index.less"
/**
 * 计数器组件
 * @param param0 
 */
const Home:React.FC = () => {
  return (
    <div className="edit">
      <Header title="我是导航栏" />
      <Draw  />
    </div>
  )
}
export default Home