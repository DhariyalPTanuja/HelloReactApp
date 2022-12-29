import React from 'react';
import './App.css';
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
      
     </div>
    );
  }
}
export default App;
