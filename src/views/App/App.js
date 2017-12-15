import React, { Component } from 'react'
import Header from 'components/Header'
// import Footer from 'components/Footer'
// import { Link } from 'react-router-dom'
import UserProfile from 'components/Profile/user_profile'
import './app.scss'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class App extends Component {
  componentWillMount () {
    this.props.fetchGithub('lowrey')
    this.props.fetchGhost()
  }
  render () {
    return (
      <div styleName='App'>
        <Header />
        <UserProfile />
        {/*
        <Link to='/Example'>Redux Example</Link>
        <Footer />
        */}
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

App.propTypes = {
  fetchGithub: PropTypes.func,
  fetchGhost: PropTypes.func
}

export default connect(mapStateToProps, actions)(App)
