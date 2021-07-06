
import {createStore} from 'redux'
interface State {
  isLoading: boolean,
  showWord:boolean
}
interface Action{
  type: string,
}
const data={ 
  count: 0,
  isLoading:false,
  showWord:false
};
const Reducer = (state:State=data, action: Action&State) => {
  switch(action.type) {
    case "login":
      return {...state,isLoading:action.isLoading};
    case "showWord":
      if(state.showWord){
        return {...state,showWord:false};
      }else{
        return {...state,showWord:true};
      }
      
    default:
      return state
  }
}
const store = createStore(Reducer)
export default store;
