import {combineReducers} from 'redux'
import exampleReducer from './exampleReducers'
import profileReducer from './profile'
import ghostReducer from './blog'
import followersReducer from './followers'
import gistsReducer from './gists'
import reposReducer from './repos'

export default combineReducers({
  exampleReducer,
  profile: profileReducer,
  followers: followersReducer,
  gists: gistsReducer,
  repos: reposReducer,
  ghost: ghostReducer
})
