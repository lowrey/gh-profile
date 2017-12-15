import React, { Component } from 'react'
import Header from 'components/Header'
import Chart from 'components/Chart/chart'
import './Graph.scss'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Graph extends Component {
  render () {
    return (
      <div styleName='Graph'>
        <Header />
        <Chart type={this.props.match.params.type} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repos.info
  }
}

Graph.propTypes = {
  match: PropTypes.string
}

export default connect(mapStateToProps, actions)(Graph)
