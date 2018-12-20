import { combineReducers } from 'redux';
import { roomObjects } from './roomObjects'
import { roomList } from './roomList';
import { roomClick } from '../actions';
import { badgesList } from './badgesList';

const allReducers = combineReducers({
  roomObjects,
  roomList, 
  roomClick,
  badgesList,
})

export default allReducers;