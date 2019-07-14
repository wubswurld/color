import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class MobileHomepage extends Component {
  render() {
    return (
       <div>
        <div id="wrapper" className="">
        <Link id="mobilehomebutton" to="/"><p>Color.</p></Link>
        </div>
         <div>
          <Link id="mobilelist" to="/Stor" className="hvr-float"><h4>S   H   O   P</h4></Link>
          <a id="mobilecontact" href="/Contact" className="hvr-float"><h4>C O N T A C T</h4></a>
         </div>
          <div>
           <a href="https://www.instagram.com/color.usa" target="_blank" id="but" className="fa fa-instagram fa-2x hvr-float"></a>
          </div>
            <div>
              <i id="mobilecopy">Copyright © Color. 2018</i>
            </div>
          </div>
      );
     }
   }

export default MobileHomepage;