
import './App.css';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import first from './1.jpeg';
import second from './2.jpeg';
import third from './3.jpeg';
import fourth from './4.jpeg';
import fifth from './5.jpeg';


const {format} = require('date-fns');
const today =format(new Date(),'dd.MM.yyyy HH:mm');
console.log(today)

function App() {
  return (
    <>
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className="nav1">
      <a className="navbar-brand">    
        <i class="fa fa-cloud"></i>
      </a>
      <form className="form-inline justify-content-start">
        <input className="form-control mr-sm-2" type="search" placeHolder="Search" ariaLabel="Search"/>
      </form>
      </div>
      <a className="navbar-brand date"> {today}</a>
    </nav>

    <div className='container'>
      <div className='texts ' style={{ backgroundImage: `url(${first})`, backgroundPosition: 'center',
  backgroundSize: 'cover'}}>
        <h1 >HEY</h1>
      </div>
      <div className='texts ' style={{ backgroundImage: `url(${second})`,backgroundPosition: 'center',
  backgroundSize: 'cover'}}>
        <h1 > LET'S</h1>
      </div>
      <div className='texts ' style={{ backgroundImage: `url(${third})`,backgroundPosition: 'center',
  backgroundSize: 'cover'}}>
        <h1 >GIVE</h1>
      </div>
      <div className='texts ' style={{ backgroundImage: `url(${fourth})`,backgroundPosition: 'center',
  backgroundSize: 'cover'}}>
        <h1 >ALL</h1>
      </div>
      <div className='texts ' style={{ backgroundImage: `url(${fifth})`, backgroundPosition: 'center',
  backgroundSize: 'cover'}}>
        <h1 >YOU CAN</h1>
      </div>

      
    </div>
    </>
  );
}

export default App;


/*.texts img{
 
  width: 100%;
  height: 100vh;
}

*/