import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
/**
 * Home Page Component
 */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
/**
 * Routing to react-router guide
 */
const Routing = () => (
  <div>
    <h2>
      <Link to="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">
        Quick Start Guide to Routing
      </Link>
    </h2>
  </div>
)

/**
 * Topic page
 * @param {[object]} match url matching. eg rendering , components
 */
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

/**
 * Topics page component with 3 sub topic redirect
 * @param {[object]} match contains url contains
 */
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    {/*
      secondary routes to each topic
    */}
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
/**
 * App contains Base Route for the website.
 */
const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/routing">Routing</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/routing" component={Routing}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default App;
