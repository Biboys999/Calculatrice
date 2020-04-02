import React from 'react';
import './App.css';

import Header from './components/Header'
import Button from './components/Button'

// class Calculatrice extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h2 style={{color: 'whitesmoke'}}>Hello World</h2>
//       </div>
//     );
//   }

// }

class Calculatrice extends React.Component {
  state = {
    bouton_operation : [ 

      {
        id : 4,
        nom : "+",
      },
      {
        id : 5,
        nom : "-",
      },
      {
        id : 5,
        nom : "X",
      },
      {
        id : 6,
        nom : "=",
      },          
    ],


    bouton_chiffre : [ 
      {
        id : "neuf",
        nom : "9",
      },
      {
        id : "huit",
        nom : "8",
      },
      {
        id : "sept",
        nom : "7",
      },
      {
        id : "six",
        nom : "6",
      },
      {
        id : "cinq",
        nom : "5",
      },
      {
        id : "quatre",
        nom : "4",
      },
      {
        id : "trois",
        nom : "3",
        },
        {
          id : "deux",
          nom : "2",
          },
      {
        id : "un",
        nom : "1",
      },
      {
        id : "zero",
        nom : "0",
      },
      {
        id : "point",
        nom : ".",
      },
      {
        id : "AC",
        nom : "AC",
        text : "K O"
      }
    ]
  }

  render() {
    return(
      <div id="Calculatrice">
        <Header />
        <div id="corp">
          <ul id="chiffre">
          {
            this.state.bouton_chiffre.map(bouton_chiffre => (
              <button id={bouton_chiffre.id} className="button btn_chiffre" key={bouton_chiffre.id}>{bouton_chiffre.text}</button>
            ))
          }
          </ul>
          <ul id="operation">
          {
            this.state.bouton_operation.map(bouton_operation => (
              <button id={bouton_operation.id} className="button btn_operation" key={bouton_operation.id}>{bouton_operation.nom}</button>
            ))
          }
          </ul>
        </div>

      </div>
    )
  }
}

export default Calculatrice;
