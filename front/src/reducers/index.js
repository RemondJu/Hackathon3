import { combineReducers } from 'redux';
import { objectsList } from './room1ObjectsList'
import { roomList } from './roomList';

const allReducers = combineReducers({
  objectsList,
  roomList,
})

export default allReducers;