 // routes/index.jsx
import React,{Suspense,lazy,useEffect,useContext}from 'react'
import { HashRouter as Router, Route, Switch, Redirect,useHistory} from 'react-router-dom'
import Head from '../components/head/head'//导航栏
import { useSelector} from 'react-redux'
import routerList from "./cofing"
export default  () => {
  const History= useHistory()
  const isLoading = useSelector((state:{isLoading:boolean})=>state.isLoading)
  useEffect(()=>{
    if(!isLoading){
      console.log("没有登录")
      History.push({pathname:"/login",state:{id:3}})
    }
  },[isLoading])
  return (
    <Router>
    <Head></Head>
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
          {routerList.map((item:any)=>{
            return <Route path={item.path} component={item.component} key={item.path}></Route>
            })}
          <Redirect to="/home/main" from="/home"></Redirect>
        </Switch>
      </Suspense>
    </Router>
  )
}
