import React from "react"
import './box.less'
import {styles} from '../type'
interface props{
  styles: styles
  id:number,
  select:boolean
  selectMousedown:selectMousedown,//选择按下触发事件
  mouseup:mouseup
}
interface selectMousedown{
  (id:number,target:any,direction:string|null):void
}
interface mouseup{
  (e:any):void
}
export default (props:props)=>{
  const {selectMousedown,styles,mouseup}=props;
  const onMousedown=(e:any)=>{
    e.stopPropagation();
    const direction = e.target.getAttribute("data-direction");
    selectMousedown(props.id,e,direction)
  }
  return (<div 
              className="box"
              style={{
                marginLeft:`${styles.left}px`,
                marginTop:`${styles.top}px`,
                width:`${styles.width}px`,
                height:`${styles.height}px`,
                background:styles.background
              }}
              onMouseDown={onMousedown}
              onMouseUp={mouseup}
              >
                <div style={{display:props.select?'block':'none'}} >
                <div className="operate-hor-line"></div>
                <div className="operate-ver-line"></div>
                <div className="scale scale-nw" data-direction="nw"></div>
                <div className="scale scale-ne" data-direction="ne"></div>
                <div className="scale scale-sw" data-direction="sw"></div>
                <div className="scale scale-se" data-direction="se"></div>
                <div className="scale scale-n" data-direction="n"></div>
                <div className="scale scale-e" data-direction="e"></div>
                <div className="scale scale-s" data-direction="s"></div>
                <div className="scale scale-w" data-direction="w"></div>
        </div>
        </div>)
}