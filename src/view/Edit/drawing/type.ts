/**
 * 单个组件设置
 */
export interface boxData{
  id: number;//id唯一
  styles: styles;//样式
  select:boolean,//当前是否被选中
  children?:list,//父子嵌套关系
  parent?:number,//记录父组件id
}
export interface styles{
  left: number;
  top: number;
  width: number;
  height: number;
  background: string;
}
export interface over{ 
  width:number,
  height:number,
  left:number,
  top:number
}
export type list=boxData[];
export type StateType = {
  selectData:boxData|null,//选择数据
  list:list//数据数组
  mousedown:boolean,//判断但前是有组件按下
  clientX:number,//鼠标距离屏幕距离X
  clientY:number,//鼠标距离屏幕距离Y
  direction:null|string,//类型
  over:over,
}
export type ActionType = {
  type:string,
  value:any
}
