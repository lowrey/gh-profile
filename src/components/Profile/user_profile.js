import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import './user_profile.scss'
import truncate from 'lodash/truncate'
import { Link } from 'react-router-dom'

class UserProfile extends Component {
  constructor () {
    super()
    this.state = {
      graph: null
    }
  }

  render () {
    const { profile } = this.props
    const { blog } = this.props
    console.info('state', {profile}, {blog}, this.state)

    if (!profile || !blog) {
      // <div className='profile-container mdl-progress mdl-js-progress mdl-progress__indeterminate' />
      return (
        <div />
      )
    }

    return (
      <div styleName='wrapper'>
        <div className='profile-container material-card-wide mdl-card mdl-shadow--2dp'
          styleName='mdl-card__profile'>
          <div styleName='mdl-card__title'
            style={{background: `url(${profile.avatar_url}) center/cover`}}>
            <h2 className='mdl-card__title-text' />
          </div>
          <div className='mdl-card__supporting-text'>
            <div>
              {truncate(profile.bio, {length: 140})}
            </div>
            <div>
              <span styleName='bio-detail'>Location:</span> {profile.location}
            </div>
            <ul className='material-list-icon mdl-list'>
              <li className='mdl-list__item'>
                <span className='mdl-list__item-primary-content'>
                  <a href={`https://github.com/${profile.login}/?tab=repositories`}>
                    <i className='material-icons mdl-list__item-avatar'>code</i>
                  </a>
                  <Link to={`/Graph/repos`}>
                    <span className='mdl-badge' data-badge={profile.public_repos}>Repositories</span>
                  </Link>
                </span>
              </li>
              <li className='mdl-list__item'>
                <span className='mdl-list__item-primary-content'>
                  <a href={`https://gist.github.com/${profile.login}`}>
                    <i className='material-icons mdl-list__item-avatar'>reorder</i>
                  </a>
                  <Link to={`/Graph/gists`}>
                    <span className='mdl-badge' data-badge={profile.public_gists}>Gists</span>
                  </Link>
                </span>
              </li>
              <li className='mdl-list__item'>
                <span className='mdl-list__item-primary-content'>
                  <a href={`https://github.com/${profile.login}/?tab=followers`}>
                    <i className='material-icons mdl-list__item-avatar'>people</i>
                  </a>
                  <Link to={`/Graph/followers`}>
                    <span className='mdl-badge' data-badge={profile.followers}>Followers</span>
                  </Link>
                </span>
              </li>
              <li className='mdl-list__item'>
                <span className='mdl-list__item-primary-content'>
                  <a href={`https://lowrey.me/`}>
                    <i className='material-icons mdl-list__item-avatar'>adjust</i>
                  </a>
                  <Link to={`/Graph/blog`}>
                    <span className='mdl-badge' data-badge={blog.posts.length}>Blog</span>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div className='mdl-card__actions mdl-card--border'>
            <a className='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'
              href={`https://github.com/${profile.login}/`}>
              Profile
            </a>
            {profile.blog &&
              <a className='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'
                href={profile.blog}>
                Website
              </a>
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile.info,
    blog: state.ghost.info
  }
}

UserProfile.propTypes = {
  profile: PropTypes.object,
  blog: PropTypes.object
}

export default connect(mapStateToProps, actions)(UserProfile)
