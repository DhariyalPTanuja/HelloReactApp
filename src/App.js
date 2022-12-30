import React from 'react';
import './App.css';
import logo from './logobl.png';

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      // specify userName as String Type in the App Component State
      userName:''
    }
  }
  // onClick function
  onClick =($event)=> {
    console.log("save button is clicked!!",$event);
    window.open(this.url,"_blank");
  }
  onNameChange=(event) => {
    console.log("value is:",event.target.value);
    //set the title using setState method
    //bind the input from Element using setState to userName on on Change event
    this.setState({userName: event.target.value})
  }

  render(){
    return (
      <div className="App">
         {/* change in the userName reflected in the header Tag */}
      <h1>Hello {this.state.userName} From BridgeLabz </h1>
      {/* UC3: To display BridgeLabz Logo using Property Binding Technique */}
        {/* UC4: To launch BridgeLabz Site in a new Tab on clicking BridgeLabz Logo */}
      <img src = {logo} onClick={this.onClick}
      alt= "The BridgeLabz logo: a Bridge to employment through lab works"/>
    {/*UC: 5 To display Hello from BridgeLabz with a user input name - Make sure to import Form Module */}
   <div>
    <input onChange={this.onNameChange} />
   </div>
     </div>
    );
  }
}
export default App;
