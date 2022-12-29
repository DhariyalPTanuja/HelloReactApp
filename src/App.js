import React from 'react';
import './App.css';
import logo from './logobl.png';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      title: 'Hello From BridgeLabz'
    }
  }
  render(){
    return (
      <div className="App">
        {/*UC2: To display “Hello from BidgeLabz” using One Way Data Bindings */}
      <h1> {this.state.title}</h1>
      {/* UC3: To display BridgeLabz Logo using Property Binding Technique */}
      <img src = {logo}
      alt= "The BridgeLabz logo: a Bridge to employment through lab works"/>
     </div>
    );
  }
}
export default App;
