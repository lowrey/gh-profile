import {createStore, applyMiddleware, compose} from 'redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import {persistState} from 'redux-devtools'
import DevTools from './components/DevTools'
import rootReducer from 'reducers'

export function configureStore (initialState = {}) {
  const middleware = [thunk, multi, ReduxPromise]

  const enhancers = [
    applyMiddleware(...middleware)
  ]

  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(DevTools.instrument())
    enhancers.push(persistState(getDebugSessionKey()))
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers))

  // For hot reloading of react components
  // Also for debugging
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })

    store.subscribe(() => {
      // console.info('State Tree', store.getState())
    })
  }

  return store
}

function getDebugSessionKey () {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}
