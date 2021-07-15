
/**
 * 节流
 * @param callBack 
 * @param time 
 * @returns 
 */
export const throttle=(callBack:Function, time:number)=>{
  let open = true; // open 是缓存变量 来控制函数执行还是不执行 
  return (...ags: any) => {
    if (!open) return;// 如果节流函数已经执行了 直接return
    open = false; // 设为关
    callBack();
    setTimeout(() => {
      open = true; // 节流周期执行完设为开
    }, time * 1000);
  };
}
export const mapChangeObj = (map: Map<string, string>) => {
  let obj = {};
  for (let [k, v] of map) {
    // @ts-ignore
    obj[k] = v;
  }
  return obj;
};

  /**
   * 防抖
   * @param callBack 
   * @param time 
   * @returns 
   */
  function debounce(callBack:Function, time:number) {
    let timer:number|undefined = undefined; // 定时器的返回值 初始为null
    return () => {
      clearTimeout(timer); // 如果防抖函数一直触发那么callBack一直不执行
       //@ts-ignore
      timer = setTimeout(() => {
        callBack();
      }, time * 1000);
    };
  }
  /**
   * 十进制转化为16进制
   * @param x string
   * @returns 
   */
  export const hex=(x:string)=>{
    return ("0" + parseInt(x).toString(16)).slice(-2);
}
/**
 * RGB颜色转为十六进制颜色
 * @param rgb 
 * @returns 
 */
export const RGB2HEX=(rgb: string)=>{
  const rgbs:any = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);  
  return "#" + hex(rgbs[1]) + hex(rgbs[2]) + hex(rgbs[3]);
}
/**
 * rgba 转hex r g a b
 * @param rgb | rgba
 * @returns {hex: string,r:number,g:number,b:number,a:number}
 */
export const rgbaToHex= (rgba:string):{hex: string,r:number,g:number,b:number,a:number,}=>{
  const result =  rgba.match(/(\d+\.)?\d+/g);
  if(!result) {
    return {
      hex:'#ffffff',
      r:255,
      g:255,
      b:255,
      a:1,
    };
  }
  /* r:result[1], g:result[2], b:result[3], a: result[4] */
  const r=Number(result[0]);
  const g=Number(result[1]);
  const b=Number(result[2]);
  const a=result.length>3 ? Number(result[3]) : 1;
  return {hex:"#" + hex(result[1]) + hex(result[2]) + hex(result[3]),r,g,b,a};
}
/**
 * 判断是否是hex
 * @param value string
 */
export const isHex=(value:string):boolean=>{
  return value.indexOf('#')===-1?false:true;
}

  /**
   * 十六进制数字转化为十进制数字
   * @param hex string
   * @returns 
   */
  export const HEX2DEC=(hex:string)=>{
    return parseInt(hex,16).toString();
  }
  /**
   * 十六进制颜色转化为RGB颜色
   * @param hex string
   * @returns 
   */
  export const HEX2RGB=(hex:string):{r:number, g:number, b:number}=>{
    hex = hex.substring(1);
    if(hex.length === 3){
      hex += hex;
    }  
    return {r:Number(HEX2DEC(hex.substring(0,2))),g:Number(HEX2DEC(hex.substring(2,4))),b:Number(HEX2DEC(hex.substring(4)))}
}
/**
 * 
 * @param startColor 
 * @param endColor 
 * @param step 
 * @returns 
 */
export const gradientColor=(startColor:string, endColor:string, step:number)=> {
  let startRGB = HEX2RGB(startColor);//转换为rgb数组模式
  const {r,g,b}=startRGB;
  let startR = r;
  let startG = g;
  let startB = b;

  let endRGB = HEX2RGB(endColor);;
  let endR = endRGB.r;
  let endG = endRGB.g;
  let endB = endRGB.b;

  let sR = (endR - startR) / step;//总差值
  let sG = (endG - startG) / step;
  let sB = (endB - startB) / step;
  return {r: sR, g: sG, b: sB};
};
export const section=(startColor:number[], endColor:number[],step:number)=> {
  let sR = ( endColor[0]-startColor[0]);//总差值
  let sG = (endColor[1]-startColor[1]);
  let sB = (endColor[2]-startColor[2]);
  return {r:startColor[0]+Math.floor(sR*step), g:startColor[1]+Math.floor(sG*step), b:startColor[2]+Math.floor(sB*step)};
};
/**
 * 判断类型
 * @param {any} value 
 * @returns {string} 类型（小写）
 */
const decideType = (value:any) => {
  let str = Object.prototype.toString.call(value).substring(8)
  return str = str.substring(0, str.length - 1);
}
/**
 * 深拷贝
 * @param {any} value 
 * @returns {any} value 
 */
const DeepCopy=(value:any)=> {
  if (decideType(value) === "Object") {//是对象拷贝对象
    const obj:any = {}
    for (let i in value) {
      obj[i] = DeepCopy(value[i])
    }
    return obj
  } else if (decideType(value) === "Array") {//是数组拷贝数组
    let ary:any = []
    value.forEach((item:any, index:number) => {
      ary[index] = DeepCopy(item)
    })
    return ary
  } else {//基本类型 时间  函数  正则全部返回
    return value
  }
}
/**
 * forEach递归版
 * 递归遍历
 */
const deepEach=(data:any,each:(a?:any,index?:number)=>void)=>{
    data.forEach((item:any,index:number)=>{
      each(item, index)
      !item.children?null:deepEach(item.children,each)
    })
}
/**
 * 解开树
 * @param data 树 
 * @param list 解开后的树 包括父元素本身
 * @returns Array
 */
const deepUntie=(data:any,list:any=[])=>{
    const arr=list
    data.forEach((item:any)=>{
        arr.push(item)
        if(item.children){
          deepUntie(item.children,arr)
        }
    })
    return arr
}
/**
 * 递归删除id
 * @param data 
 * @param ID 
 */
const deepDelete=(data:any,ID:string|number)=>{
  let index=0
  for(let item of data){
    if (item.id === ID) {
      data.splice(index, 1);
      break;
    }
    if(item.children){
      deepDelete(item.children,ID)
    }
    index++;
  }
}
/**
 * 判断是不是手机端
 * @returns boolean
 */
const isPhone=():boolean=>{
  if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
    return true
  }else{
    return false
  }
}
/**
 * 获取url参数 hash
 * @param val 
 * @returns string | boolean
 */
const getQuery=(val:any)=> {
  const w = location.hash.indexOf('?');
  const query = location.hash.substring(w + 1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] == val) { return pair[1]; }
  }
  return false;
}
/**
 * 获取url参数 hash
 * @param val 
 * @returns string | boolean
 */
 const getUrlQuery=(val:any,url:string)=> {
  const vars = url.split('&');
  const str=`${val}=`
  for (let i = 0; i < vars.length; i++) {
    const k=vars[i].indexOf(`${val}=`)
    if(k>-1){
      return  vars[i].slice(str.length)
    }
  }
  return false;
}
/**
 * 将数组过滤成 number类型数组
 * @param list 需要过滤的数组
 * @returns number[]
 */
const makeNumber=(list:any[]):number[]=>{
    return list.map(item=>{
      return Math.floor(Number(item) * 100) / 100 
    })
}
/**
 * 指定集合的所有元素是否都包含在原始的集合中
 * @param set 原始数据
 * @param set1 需要判断的数据
 */
const isSuperset=(set:any,set1:any)=>{
    const data=new Set(set);
    for (let ele of set1) {
      if (!data.has(ele)) {
        return false
      }
      return true
    }
}

export {debounce,DeepCopy,decideType,deepEach,deepUntie,deepDelete,isPhone,getQuery,makeNumber,isSuperset,getUrlQuery}