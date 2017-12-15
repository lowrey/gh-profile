import {
  FETCH_GISTS,
  FETCH_GISTS_ERROR,
  FETCH_GISTS_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  info: null,
  error: {response: {}, invalid: false}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GISTS:
      return {
        ...state,
        error: false
      }

    case FETCH_GISTS_SUCCESS:
      return {
        info: action.payload.data,
        error: false
      }

    case FETCH_GISTS_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
