import React from 'react';

import Akatsuki from '../naruto_img/symbole/akatsuki_symbole.jpg'
import Sceau from '../naruto_img/symbole/naruto.jpg'
import Uchiha from '../naruto_img/symbole/symbole_uchiha.jpg'

class Header extends React.Component {
    render() {
      return(
        <div id="header">
            <img id="akatsuki" className="position_symbole" src={Akatsuki} />
            <img id="sceau"    className="position_symbole" src={Sceau} />
            <img id="uchiha"   className="position_symbole" src={Uchiha} />
        </div>
      )
    }
  }
  
  export default Header;