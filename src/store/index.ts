
import {createStore} from 'redux'
interface State {
  isLoading: boolean
}
interface Action{
  type: string, isLoading:boolean
}
const data={ count: 0,isLoading:false };
const Reducer = (state:State=data, action: Action) => {
  switch(action.type) {
    case "login":
      return {...state,isLoading:action.isLoading}
    default:
      return state
  }
}
const store = createStore(Reducer)
export default store
