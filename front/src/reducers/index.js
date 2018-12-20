import { combineReducers } from 'redux';
import { room1Objects } from './room1Objects'
import { room2Objects } from './room2Objects'
import { roomList } from './roomList';

const allReducers = combineReducers({
  room1Objects,
  room2Objects,
  roomList, 
})

export default allReducers;