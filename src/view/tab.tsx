import React,{useState} from 'react'
import '../App.scss';
import {Title} from "./Counter"
import { useHistory } from 'react-router-dom';

const Head = () => {
  const [type, setType] = useState<string>("day"); 
  const routr:any=localStorage.getItem("router");
  
  const style=(value:string):{backgroundColor:string}|undefined=>{
    return  value==="day"
            ?(type==="day"?{backgroundColor:"pink"}:{backgroundColor:"pink"})
            :value==="week"
              ?(type==="week"?{backgroundColor:"pink"}:{backgroundColor:"pink"})
              :(type==="year"?{backgroundColor:"pink"}:{backgroundColor:"pink"})
  }
  let history = useHistory();

  const tabChange=(value:string):void=>{
    setType(value)
    console.log(value)
    history.push(`${value}`)
    
  }
  return (
    <div className="component">
      <Title title="Tab切换"></Title>
      <div className="tab">
        {JSON.parse(routr).map((item:{path:string})=>{
          return <div 
          className={"tabs"}
          style={style(item.path)}
          onClick={()=>tabChange(`${item.path}`)}
          key={item.path}>
            {item.path}
          </div>
        })}
      </div>
    </div>
  )
}
export default Head