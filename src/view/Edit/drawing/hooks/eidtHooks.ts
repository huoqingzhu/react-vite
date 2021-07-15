import {boxData,StateType,ActionType} from '../type'
import {useReducer} from 'react'
import {deepUntie} from "@/utils/methods"
export default ()=>{
  const initialState = { 
    selectData:null,
    mousedown:false,
    clientX:0,//鼠标距离屏幕距离
    clientY:0,
    direction:null,
    over:{//一个中间变量
      width:0,
      height:0,
      left:0,
      top:0
    },
    list:[
        {id:1,styles:{top:100,left:100,width:100,height:100,background:'#cccccc'},select:false},
        {id:2,styles:{top:100,left:300,width:100,height:100,background:'#333333'},select:false},
  ]}
  
  const reducer=(state: StateType, action: ActionType)=>{
    switch (action.type) {
      case 'changeSelete':
        return {...state,selectData:action.value};
      case "setDirection":
        return {...state,direction:action.value};
      case "setMousedown":
        return {...state,mousedown:action.value};
      case "setClient":
        return {...state,clientX:action.value.x,clientY:action.value.y};
      case "setOver":
        return {...state,over:action.value};
      case "setPosition":
        if(state.selectData){
          return {...state}
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer,initialState)
  /**
  * 子组件按下事件
  * @param id 
  * @param target 
  * @param direction 
  */
  const selectMousedown=(id:number,target:any,direction:string|null)=>{
    const data=getParent(id);
    dispatch({type:"setDirection",value:direction});
    dispatch({type:"setMousedown",value:true})
    deepUntie(state.list).forEach((item: any) => {
      item!.select=false;
    })
    if(data){
      dispatch({type:"changeSelete",value:data});
      data.select=true;
    }
    // 将选中元素位置生成快照
    if(data){
      dispatch({type:"setOver",value:{
        left:data.styles.left,
        top:data.styles.top,
        height:data.styles.height,
        width:data.styles.width,
      }})
    }
    dispatch({type:"setClient",value:{x:target.clientX,y:target.clientY}})
  }
    /**
   * 寻找父组件
   * @param ID 
   * @returns 
   */
  const getParent=(ID:number): boxData|undefined=>{
    const data =deepUntie(state.list).find((item:any)=>item.id===ID);
    if(data&&!data.parent){
      return data;
    }else{
      return getParent(data.parent);
    }
  }
  /**
   * 父组件移动事件
   */
  const mousemove=(e:any)=>{
    if(state.mousedown){//如果选中了物体
      let nowX = e.clientX;
      let nowY = e.clientY;
      let disX = nowX - state.clientX;
      let disY = nowY - state.clientY;
      const style=state.selectData.styles;
      if(state.direction){
        switch (state.direction) {
          // 左边
          case "w":
            style.width = Math.ceil(state.over.width) - disX;
            style.left = Math.ceil(state.over.left) + disX;
            break;
          // 右边
          case "e":
            style.width = Math.ceil(state.over.width) + disX;
            break;
          // 上边
          case "n":
            style.height = Math.ceil(state.over.height) - disY;
            style.top = Math.ceil(state.over.top) + disY;
            break;
          // 下边
          case "s":
            style.height = Math.ceil(state.over.height) + disY;
            break;
          // 左上
          case "nw":
            style.width = Math.ceil(state.over.width) - disX;
            style.left = Math.ceil(state.over.left) + disX;
            style.height = Math.ceil(state.over.height) - disY;
            style.top = Math.ceil(state.over.top) + disY;
            break;
          // 左下
          case "sw":
            style.width = Math.ceil(state.over.width) - disX;
            style.left = Math.ceil(state.over.left) + disX;
            style.height = Math.ceil(state.over.height) + disY;
            break;
          // 右上
          case "ne":
            style.height = Math.ceil(state.over.height) - disY;
            style.top = Math.ceil(state.over.top) + disY;
            style.width = Math.ceil(state.over.width) + disX;
            break;
          // 右下
          case "se":
            style.height = Math.ceil(state.over.height) + disY;
            style.width = Math.ceil(state.over.width) + disX;
            break;
          default:
            break;
        }
      }else{
        const nx = e.clientX;
        const ny = e.clientY;
        //计算移动后的左偏移量和顶部的偏移量
        const nl = nx - (state.clientX - state.over.left);
        const nt = ny - (state.clientY - state.over.top);
        style.left = nl;
        style.top = nt;
      }
      dispatch({type:"setPosition",value:{left:0}})
    }
  }
  const mouseup=()=>{
    dispatch({type:"setMousedown",value:false})
  }
  return {selectMousedown,mousemove,mouseup,state}
}
