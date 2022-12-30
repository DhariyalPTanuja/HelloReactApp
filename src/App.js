import React from 'react';
import './App.css';
import logo from './logobl.png';

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      title: 'Hello From BridgeLabz'
    }
  }
  // onClick function
  onClick =($event)=> {
    console.log("save button is clicked!!",$event);
    window.open(this.url,"_blank");
  }
  render(){
    return (
      <div className="App">
        {/*UC2: To display “Hello from BidgeLabz” using One Way Data Bindings */}
      <h1> {this.state.title}</h1>
      {/* UC3: To display BridgeLabz Logo using Property Binding Technique */}
        {/* UC4: To launch BridgeLabz Site in a new Tab on clicking BridgeLabz Logo */}
      <img src = {logo} onClick={this.onClick}
      alt= "The BridgeLabz logo: a Bridge to employment through lab works"/>
    
     </div>
    );
  }
}
export default App;
