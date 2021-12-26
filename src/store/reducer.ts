import { combineReducers } from 'redux';

interface IAction {
  type: string;
  item: any;
}

function setUserInfo(state = {}, action: IAction) {
  switch (action.type) {
    case 'SET_USERINFO':
      return action.item;
    case 'DELETE_USERINFO':
      return state;
    default:
      return state;
  }
}
let defaultState = 'Home';
const fun = (state = defaultState, action: any) => {
  if (action.type === 'SET') {
    return (state = action.data);
  } else {
    return state;
  }
};
export default combineReducers({ setUserInfo, fun });
