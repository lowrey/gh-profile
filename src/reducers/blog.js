import {
  FETCH_GHOST_ERROR,
  FETCH_GHOST_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  info: null,
  error: {response: {}, invalid: false}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GHOST_SUCCESS:
      return {
        info: action.payload.data,
        error: false
      }

    case FETCH_GHOST_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
