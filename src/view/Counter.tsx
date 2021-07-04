import { spawn } from 'child_process';
import React, { useState,useEffect,createContext,useContext,useReducer,useRef,useMemo,useCallback, SFC} from 'react'
import '../App.scss';
import useFriendStatus from "../hooks/useFriendStatus"
// 标题组件
const Title:React.FC<{title:string}>=({title="我是标题"})=>{
    return (
      <div className="title">
        {title}
      </div>
    )
}
/**
 * 计数器组件
 * @param param0 
 */
const Counter:React.FC<{ initial: number }> = ({ initial = 0 }) => {
  const [count, setCount] = useState<number>(initial)
  const add=(value:number)=>{
        setCount(count+value)
      }
  return (
    <div className="component">
      <Title title="计数器组件useState" />
      <p>父组件传给我的值: {count}</p>
      <button onClick={(e)=>{add(30)}}>加</button>
      <button onClick={() => setCount(count-10)}>减</button>
    </div>
  )
}

/**
 * useState对象组件
 * @param param0 
 */
type ArticleInfo = {
  title: string,
  content: string
}
const Article:React.FC<ArticleInfo> = ({ title, content }) => {
  const [article, setArticle] = useState<ArticleInfo>({ title, content })
  return (
    <div className="component">
      <Title title="useState对象组件" />
      <p>Title: { article.title }</p>
      <section>{ article.content }</section>
      <button onClick={() => setArticle({
        title: '下一篇',
        content: '下一篇的内容',
      })}>
        下一篇
      </button>
    </div>
  )
}
/**
 * useReducer组件
 */
const User = () => {
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

const CountContext = createContext(false)
// useContext 组件
function Counters(){
  const count = useContext(CountContext)    //一句话就可以得到count
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
const FriendStatus:React.FC<{id:number}>=({id})=>{
  const friendList = [
    { id: 2, name: 'Phoebe' },
    { id: 40, name: 'Rachel' },
    { id: 1, name: 'Ross' },
  ];
  const [recipientID, setRecipientID] = useState(1);
  let isOnline=useFriendStatus(recipientID)
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
      {isOnline?<div className="online">在线</div>:<div>不在线</div>}
      <CountContext.Provider value={isOnline}>
        <Counters></Counters>
      </CountContext.Provider>
    </div>
  )
}


/**
 * useReducer 组件
 */
function CounterReducer() {
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
  return (
    <div className="component">
      <Title title="useReducer 对象组件"/>
      <p> Count: {state.count}</p>
      <p>Name:{state.name}</p>
      <button onClick={() => dispatch({type: 'add',count:20})}>-</button>
      <button onClick={() => dispatch({type: 'reduce',count:10})}>+</button>
    </div>
  );
}
/**
 * useRef组件
 */
const CounterRef = () => {
  const [count, setCount] = useState<number>(0)
  const buttonElement=useRef<HTMLButtonElement>(null)
  const countRef = useRef<number>(count)
  useEffect(() => {
    countRef.current = count
    console.log(buttonElement)
  })
  const handleCount = () => {
    setTimeout(() => {
      alert('current count: ' + countRef.current)
    }, 3000);
  }

  return (
    <div className="component">
      <Title title="useRef组件"/>
      <p>current count: { count }</p>
      <button  onClick={() => setCount(count + 1)}>加</button>
      <button ref={buttonElement} onClick={() => handleCount()}>弹框显示</button>
    </div>
  )
}
/**
 * useMemo组件
 * 
 */
// 父组件
const Example = () => {
  const [time, setTime] = useState<number>(0)
  const [random, setRandom] = useState<number>(0)

  return (
    <div>
      <Title title="useMemo组件"/>
      <button onClick={() => setTime(new Date().getTime())}>获取当前时间</button>
      <button onClick={() => setRandom(Math.random())}>获取当前随机数</button>
      <Show time={time}>{random}</Show>
      
    </div>
  )
}

type Data = {
  time: number
}

// 子组件
const Show:React.FC<Data> = ({ time, children }) => {
  function changeTime(time: number): string {
    console.log('changeTime excuted...')
    return new Date(time).toISOString()
  }
  const newTime: string = useMemo(() => {
    console.log("useMemo")
    
    return changeTime(time)
  }, [time])
  useEffect(()=>{
    console.log("useEffect")
  },[time])
  
  return (
    <div>
      <p>Time is: { newTime }</p>
      <p>Random is: { children }</p>
    </div>
  )
}

/**
 * useCallback组件
 */
const UseRefDemof = () => {
  console.log("我是首页我加载了")
    const [text, updateText] = useState('初始值');
    const textRef = useRef<string | null>();
    useEffect(() => {
      textRef.current = text; 
      const dom = document.getElementById("map");
      console.log(dom);
    });
    const handleSubmit = useCallback(() => {
      const currentText = textRef.current; 
      alert(currentText);
    }, [textRef]); 
    const dom = document.getElementById("map");
    console.log(dom);
    return (
      <div className="component">
        <Title title="useCallback"/>
        <span id="map">父组件：</span>
        <input value={text} onChange={e => updateText(e.target.value)} />
        <ExpensiveTree onSubmit={handleSubmit} />
      </div>
    );
}
interface Eprops {
    onSubmit: any
}
const ExpensiveTree:SFC<Eprops>  = React.memo(({onSubmit}) => {
    return (
        <div>
            <span>子组件：</span>
            <button onClick={onSubmit}>点击弹出</button>
        </div>
    )
})

export {Counter,Article,User,FriendStatus,CounterReducer,CounterRef,Example,UseRefDemof,Title} 