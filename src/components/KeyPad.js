import React, { Component } from 'react'

 class KeyPad extends Component {
     buttonPressed = e => {
         this.props.buttonPressed(e.target.name)
    };
    render() {
        return (
            <div id="corp">
                <div id="chiffre">
                    <button className="button btn_chiffre" id="neuf" onClick={this.buttonPressed} name="9"></button>
                    <button className="button btn_chiffre" id="huit" onClick={this.buttonPressed} name="8"></button>
                    <button className="button btn_chiffre" id="sept" onClick={this.buttonPressed} name="7"></button>
                    <button className="button btn_chiffre" id="six" onClick={this.buttonPressed} name="6"></button>
                    <button className="button btn_chiffre" id="cinq" onClick={this.buttonPressed} name="5"></button>
                    <button className="button btn_chiffre" id="quatre" onClick={this.buttonPressed} name="4"></button>
                    <button className="button btn_chiffre" id="trois" onClick={this.buttonPressed} name="3"></button>
                    <button className="button btn_chiffre" id="deux" onClick={this.buttonPressed} name="2"></button>
                    <button className="button btn_chiffre" id="un" onClick={this.buttonPressed} name="1"></button>
                    <button className="button btn_chiffre" id="zero" onClick={this.buttonPressed} name="0"></button>      
                    
                    <button className="button btn_chiffre" id="point" onClick={this.buttonPressed} name="."></button>
                    <button className="button btn_chiffre" id="AC" onClick={this.buttonPressed} name="AC">AC</button>
                </div>

                <div id="operation">
                    <button className="button btn_operation" id="plus" onClick={this.buttonPressed} name="+">+</button>
                    <button className="button btn_operation" id="moins" onClick={this.buttonPressed} name="-">-</button>
                    <button className="button btn_operation" id="fois" onClick={this.buttonPressed} name="*">X</button>
                    <button className="button btn_operation" id="egale" onClick={this.buttonPressed} name="=">=</button>
                </div> 
            </div>
        )
    }
}


export default KeyPad;