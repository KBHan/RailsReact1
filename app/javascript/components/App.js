
import React, {Component} from 'react'

class App extends Component {
  constructor (props) {
    super(props);
    this.state={name: ''};
  }
  
  render() {
    return (
      <div>
        This is my new app! Yeah!...
        <button onClick={()=>{this.setState({name: 'Bob'});}}>Click to Say Hi</button>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}

export default App