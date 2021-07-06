import React from 'react'
import Word from './word/index'
import { useSelector} from 'react-redux'
import './index.less'
// 标题组件
const drawing:React.FC<{title:string}>=({title="我是画板组件"})=>{
  const showWord = useSelector((state:{showWord:boolean})=>state.showWord)
    return (
      <div className="edit-draw">
        {showWord?<Word title={"侧边栏"} />:null}
        {title}
      </div>
    )
}
export default drawing;