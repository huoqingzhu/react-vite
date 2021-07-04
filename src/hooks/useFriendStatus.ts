import {useState,useEffect} from "react";


export default function useFriendStatus(id:number){
    const [isOnline,setOnline]=useState<boolean>(false)
    useEffect(() => {
      console.log("id变化了,我重新执行了")
      fetch("https://xiaohuo.online/api/test")
      .then(response => response.json())
      .then((res:any) => {
        console.log(res.length)
        res.length>id?setOnline(true):setOnline(false)
      })
    },[id])
    return isOnline;
}