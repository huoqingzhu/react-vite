
import React, { useState,useEffect,createContext,useContext,useReducer,useRef,useMemo,useCallback, SFC} from 'react'
import useFriendStatus from "../../hooks/useFriendStatus"
// 标题组件
const Title:React.FC<{title:string}>=({title="我是标题"})=>{
    return (
      <div className="title">
        {title}
      </div>
    )
}
const CountContext = createContext(false)
// useContext 组件
const Counters:React.FC<{Count:any}>=({Count=null})=>{
  const count = useContext(Count)    //一句话就可以得到count
  // console.log(count)
  useEffect(()=>{
    console.log(count+"变化了")
  },[count])
  return (<div className="online">
    {count?"useContext":"变化了"}
  </div>)
}
/**
 * 自定义Hook
 * @param param0 
 */
const FriendStatus=()=>{
  const friendList = [
    { id: 2, name: 'Phoebe' },
    { id: 40, name: 'Rachel' },
    { id: 1, name: 'Ross' },
  ];
  const [recipientID, setRecipientID] = useState(1);
  let isOnline=useFriendStatus(recipientID)
  console.log()
  return (
    <div className="component">
      <Title title="自定义Hook" />
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
      {/* {isOnline?<div className="online">在线</div>:<div>不在线</div>} */}
      <CountContext.Provider value={isOnline}>
        <Counters Count={CountContext}></Counters>
      </CountContext.Provider>
    </div>
  )
}
export default FriendStatus