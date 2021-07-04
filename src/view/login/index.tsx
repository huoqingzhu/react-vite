import { useHistory,useLocation,useRouteMatch} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'
import React from 'react';

const Login=()=>{
  const count = useSelector((state:{count:number})=>state.count)
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
          <div onClick={goHome}> 登陆</div>
          <div >{count}</div>
    </div>
  )
}
export default Login