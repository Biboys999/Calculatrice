import React, { Component } from 'react';

// CSS
import './App.css';

// Components
import KeyPad from './components/KeyPad'
import Output from './components/Output'


class Calculatrice extends Component {
  state = {
    result: ''
  }

  buttonPressed = buttonName => {
    if(buttonName === '='){
      this.calculate()
    }
    else if(buttonName === 'AC'){
      this.setState({
        result: this.state.result = ''
      })
    }
    else{
      this.setState({
        result: this.state.result + buttonName
      });
    };
  }

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result)
      });
    }
    catch (e) { 
      this.setState({
        result: "error"
      });
    }
  }  

  render(){
    return(
      <div id="Calculatrice">
        <Output result={this.state.result} />
        <KeyPad buttonPressed={this.buttonPressed} />
      </div>
    )
  }
}

export default Calculatrice;
