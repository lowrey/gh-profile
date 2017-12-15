import {
  FETCH_GITHUB,
  FETCH_GITHUB_ERROR,
  FETCH_GITHUB_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  info: null,
  error: {response: {}, invalid: false}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GITHUB:
      return {
        ...state,
        error: false
      }

    case FETCH_GITHUB_SUCCESS:
      return {
        info: action.payload.data,
        error: false
      }

    case FETCH_GITHUB_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
