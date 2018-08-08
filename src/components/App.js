import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/login" render={() => <div>Login</div>} />
          <Route path="/" exact render={() => <div>Home</div>} />
          <Route path="/index" exact render={() => <div>Home</div>} />
          <Route path="/home" exact render={() => <div>Home</div>} />
          <Route
            path="/question/create"
            render={() => <div>Create New Question</div>}
          />
          <Route
            exact
            path="/question/:id"
            render={() => <div>Submit Question Answer</div>}
          />
          <Route
            exact
            path="/question/poll/:id"
            render={() => <div>Question Poll View</div>}
          />
          <Route path="/leaderboard" render={() => <div>Leader Board</div>} />
        </Fragment>
      </Router>
    )
  }
}

export default App
