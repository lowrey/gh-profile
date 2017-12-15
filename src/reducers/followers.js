import {
  FETCH_FOLLOWERS,
  FETCH_FOLLOWERS_ERROR,
  FETCH_FOLLOWERS_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  info: null,
  error: {response: {}, invalid: false}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FOLLOWERS:
      return {
        ...state,
        error: false
      }

    case FETCH_FOLLOWERS_SUCCESS:
      return {
        info: action.payload.data,
        error: false
      }

    case FETCH_FOLLOWERS_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
