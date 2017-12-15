import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import './header.scss'

class Header extends Component {
  render () {
    const { profile } = this.props
    if (!profile) {
      return (
        <div />
      )
    }
    return (
      <div styleName='App-header'>
        <h2>{profile.name}</h2>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile.info
  }
}

Header.propTypes = {
  profile: PropTypes.object
}

export default connect(mapStateToProps, actions)(Header)
