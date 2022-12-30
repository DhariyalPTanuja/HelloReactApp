import React from 'react';
import './App.css';
import logo from './logobl.png';

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      // specify userName as String Type in the App Component State
      userName:'',
      nameError:''
    }
  }
  // onClick function
  onClick =($event)=> {
    console.log("save button is clicked!!",$event);
    window.open(this.url,"_blank");
  }
  onNameChange=(event) => {
    console.log("value is:",event.target.value);
    const nameRegex = RegExp('^[A-z]{1}[a-zA-z\\s]{2,}$');
    //set the title using setState method
    //bind the input from Element using setState to userName on on Change event

    this.setState({userName: event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError:''})
    } else {
      this.setState({nameError: 'name is Incorrect'})
    }
  }

  render(){
    return (
      <div className="App">
         {/* change in the userName reflected in the header Tag */}
      <h1>Hello {this.state.userName} From BridgeLabz </h1>
      
      <img src = {logo} onClick={this.onClick}
      alt= "The BridgeLabz logo: a Bridge to employment through lab works"/>
    
   <div>
    <input onChange={this.onNameChange} />
    <span className="error-output">{this.state.nameError}</span>
   </div>
     </div>
    );
  }
}
export default App;
