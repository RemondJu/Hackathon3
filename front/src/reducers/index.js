import { combineReducers } from 'redux';
import { objectsList } from './objectsList'

const allReducers = combineReducers({
  objectsList,
})

export default allReducers;