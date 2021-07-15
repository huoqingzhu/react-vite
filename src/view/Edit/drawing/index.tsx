import React from 'react'
import Word from './word/index'
import { useSelector} from 'react-redux'
import Box from './box'
import editHooks from "./hooks/eidtHooks"
import './index.less'
const drawing:React.FC=()=>{
  const showWord = useSelector((state:{showWord:boolean})=>state.showWord);
  //处理编辑器拖拽逻辑
  const {selectMousedown,state,mousemove,mouseup} =editHooks()
    return (
      <div 
      className="edit-draw"
      onMouseMove={mousemove}
      >
        {showWord?<Word title={"侧边栏"} />:null}
        {state.list.map((item)=>{
          return  <Box 
          mouseup={mouseup}
          key={item.id}
          id={item.id}
          select={item.select}
          styles={item.styles}
          selectMousedown={selectMousedown}
        ></Box>
        })}
      </div>
    )
}
export default drawing;