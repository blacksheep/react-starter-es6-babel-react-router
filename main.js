import React from 'react'
import { Router, Route } from 'react-router'

class App extends React.Component {
  constructor () {
    super()
    this.state = { n: 0 }
  }
  render () {
    return <div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleClick.bind(this)}>click me!</button>
    </div>
  }
  handleClick () {
    this.setState({ n: this.state.n + 1 })
  }
}

React.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('content'))
