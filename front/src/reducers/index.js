import { combineReducers } from 'redux';
import { roomObjects } from './roomObjects'
import { roomList } from './roomList';
import { roomClick } from '../actions';

const allReducers = combineReducers({
  roomObjects,
  roomList, 
  roomClick,
})

export default allReducers;