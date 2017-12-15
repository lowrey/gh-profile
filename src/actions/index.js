import axios from 'axios'
import * as types from './types'

export const GITHUB_URL = 'https://api.github.com/users'
export const GHOST_URL = 'https://lowrey.me/-/ghost/api/v0.1/posts/?client_id=ghost-frontend&client_secret=8c329787a8c6&limit=all'

export const fetchGithub = user => (dispatch) => {
  dispatch({
    type: types.FETCH_GITHUB
  })

  return axios.get(`${GITHUB_URL}/${user}`)
    .then(response => dispatch({
      type: types.FETCH_GITHUB_SUCCESS,
      payload: response
    }))

    .catch(error => dispatch({
      type: types.FETCH_GITHUB_ERROR,
      payload: {response: error, invalid: true}
    })
    )
}

export const fetchGhost = user => (dispatch) => {
  dispatch({
    type: types.FETCH_GHOST
  })

  return axios.get(`${GHOST_URL}`)
    .then(response => dispatch({
      type: types.FETCH_GHOST_SUCCESS,
      payload: response
    }))
    .catch(error => dispatch({
      type: types.FETCH_GHOST_ERROR,
      payload: {response: error, invalid: true}
    })
    )
}

export const fetchGists = user => (dispatch) => {
  dispatch({
    type: types.FETCH_GISTS
  })

  return axios.get(`${GITHUB_URL}/${user}/gists`)
    .then(response => dispatch({
      type: types.FETCH_GISTS_SUCCESS,
      payload: response
    }))
    .catch(error => dispatch({
      type: types.FETCH_GISTS_ERROR,
      payload: {response: error, invalid: true}
    })
    )
}

export const fetchRepos = user => (dispatch) => {
  dispatch({
    type: types.FETCH_REPOS
  })

  return axios.get(`${GITHUB_URL}/${user}/repos`)
    .then(response => dispatch({
      type: types.FETCH_REPOS_SUCCESS,
      payload: response
    }))
    .catch(error => dispatch({
      type: types.FETCH_REPOS_ERROR,
      payload: {response: error, invalid: true}
    })
    )
}

export const fetchFollowers = user => (dispatch) => {
  dispatch({
    type: types.FETCH_FOLLOWERS
  })

  return axios.get(`${GITHUB_URL}/${user}/followers`)
    .then(response => dispatch({
      type: types.FETCH_FOLLOWERS_SUCCESS,
      payload: response
    }))
    .catch(error => dispatch({
      type: types.FETCH_FOLLOWERS_ERROR,
      payload: {response: error, invalid: true}
    })
    )
}
