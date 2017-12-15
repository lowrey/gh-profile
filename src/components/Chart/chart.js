import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import './chart.scss'
import countBy from 'lodash/countBy'
import lomap from 'lodash/map'
import sortBy from 'lodash/sortBy'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import moment from 'moment'
import { Link } from 'react-router-dom'

class Chart extends Component {
  componentWillMount () {
    if (this.props.type === 'repos') {
      this.props.fetchRepos('lowrey')
    } else if (this.props.type === 'gists') {
      this.props.fetchGists('lowrey')
    } else if (this.props.type === 'followers') {
      this.props.fetchFollowers('lowrey')
    } else if (this.props.type === 'blog') {
      this.props.fetchGhost()
    }
  }

  getData (props) {
    if (props.repos && props.type === 'repos') {
      let repos = countBy(props.repos.map(r => moment(r.created_at).format('YYYY-MM')))
      repos = sortBy(lomap(repos, (v, k) => ({Key: k, Frequency: v})), i => i.Key)
      return repos
    }
    if (props.gists && props.type === 'gists') {
      let gists = countBy(props.gists.map(r => moment(r.created_at).format('YYYY-MM')))
      gists = sortBy(lomap(gists, (v, k) => ({Key: k, Frequency: v})), i => i.Key)
      return gists
    }
    if (props.followers && props.type === 'followers') {
      let followers = countBy(props.followers.map(r => r.login))
      followers = sortBy(lomap(followers, (v, k) => ({Key: k, Frequency: v})), i => i.Key)
      return followers
    }
    if (props.blog && props.type === 'blog') {
      let blog = countBy(props.blog.posts.map(r => moment(r.created_at).format('YYYY-MM')))
      blog = sortBy(lomap(blog, (v, k) => ({Key: k, Frequency: v})), i => i.Key)
      return blog
    }
    return []
  }

  render () {
    const data = this.getData(this.props)
    return (
      <div styleName='wrapper'>
        <div className='profile-container material-card-wide mdl-card mdl-shadow--2dp'
          styleName='mdl-card__profile'>
          <div className='mdl-card__supporting-text'>
            <div>
              <BarChart width={550} height={500} data={data}
                margin={{top: 5, right: 20, left: 0, bottom: 5}}>
                <XAxis dataKey='Key' />
                <YAxis />
                <CartesianGrid strokeDasharray='3 3' />
                <Tooltip />
                <Legend />
                <Bar dataKey='Frequency' fill='#8884d8' />
              </BarChart>
            </div>
          </div>
          <div className='mdl-card__actions mdl-card--border'>
            <Link className='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'
              to={`/`}>
              Back
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repos.info,
    followers: state.followers.info,
    blog: state.ghost.info,
    gists: state.gists.info
  }
}

Chart.propTypes = {
  fetchRepos: PropTypes.array,
  fetchFollowers: PropTypes.array,
  fetchGists: PropTypes.array,
  type: PropTypes.string,
  fetchGhost: PropTypes.object
}

export default connect(mapStateToProps, actions)(Chart)
