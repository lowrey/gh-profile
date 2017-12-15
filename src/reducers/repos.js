import {
  FETCH_REPOS,
  FETCH_REPOS_ERROR,
  FETCH_REPOS_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  info: null,
  error: {response: {}, invalid: false}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_REPOS:
      return {
        ...state,
        error: false
      }

    case FETCH_REPOS_SUCCESS:
      return {
        info: action.payload.data,
        error: false
      }

    case FETCH_REPOS_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
