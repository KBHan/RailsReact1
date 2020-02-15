
import React, {Component} from 'react';
import Greeting from './Greeting';
import Nav from './Nav';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Greeting" component={Greeting} />
          <Route exact path="/Nav" component={Nav} />
        </Switch>
      </div>
    )
  }
}

const Home = function(){
  return (
    <h3>Home Page</h3>
  )
}


export default App