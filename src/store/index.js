import { createStore } from 'redux'
import {combineReducers} from 'redux'
import FriendsReducer from './reducers/friends'

export const allReducer = combineReducers({
  friends: FriendsReducer
})

export const store = createStore(allReducer);
