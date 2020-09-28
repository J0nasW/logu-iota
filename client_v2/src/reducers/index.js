import { combineReducers } from 'redux'
import containers from './containers'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  containers,
  visibilityFilter
})