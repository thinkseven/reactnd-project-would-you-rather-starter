import React, { Component, Fragment } from 'react'
import Navigation from '../Navigation/Navigation'
import Logout from '../Auth/Logout'

function withLayout(WrappedComponent) {
  class Layout extends Component {
    render() {
      return (
        <Fragment>
          <Navigation {...this.props} />
          <Logout {...this.props} />
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
  return Layout
}

export default withLayout
