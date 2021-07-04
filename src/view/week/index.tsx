import React, { useState,useReducer,useEffect} from 'react'
// import { Button } from 'antd';

// 标题组件
const Title:React.FC<{title:string}>=({title="我是标题"})=>{
    return (
      <div className="title">
        {title}
        {/* <Button type="primary">Button</Button> */}
      </div>
    )
}
/**
 * useReducer组件
 */
const Week = () => {
  console.log("我是day的我加载了")
  type StateType = {
    count: number,
    name:string
  }
  type ActionType = {
    type: 'add' | 'reduce' 
    count: number,
    name?:string
  }
  const initialState = { count: 0,name:"运算" }

  function reducer(state: StateType, action: ActionType) {
    switch (action.type) {
      case 'add':
        return { name:"正在进行加法计算", count: state.count + action.count }
      case 'reduce':
        return { name:"正在进行减法计算", count: state.count - action.count, }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer,initialState)
  useEffect(()=>{
    console.log("我执行了00000")
  },[state.name])

  return (
    <div className="component">
      <Title title="useEffect组件"/>
      <p> Count: {state.count}</p>
      <p>Name:{state.name}</p>
      <button onClick={() => dispatch({type: 'add',count:20})}>-</button>
      <button onClick={() => dispatch({type: 'reduce',count:10})}>+</button>
    </div>
  );
}
export default Week