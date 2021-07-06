import { useHistory,useLocation,useRouteMatch} from 'react-router-dom';
import {  useDispatch} from 'react-redux'
import React from 'react';
import { Button } from 'antd';

const Login=()=>{
  const dispatch = useDispatch()
  let history = useHistory();
  const {state}=useLocation()
  console.log(state)
  const match =useRouteMatch()

  console.log(match)
  // console.log(params)
  const goHome=()=>{
    dispatch({type:"login",isLoading:true})
    history.push('/home')
  }
  return (
    <div>
          <Button onClick={goHome} > 登陆</Button>
    </div>
  )
}
export default Login