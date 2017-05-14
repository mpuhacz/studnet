import React from 'react';

const Navbar = () => (
  <div className="ui fixed inverted menu">
  <div className="ui container">
    <a href="#" className="header item">
      <img className="logo" src="https://semantic-ui.com/examples/assets/images/logo.png" alt=""/>
      studNet
    </a>
    <a href="#" className="item">Strona Głowna</a>
    <div className="ui simple dropdown item">
      Zmien Uczelnie <i className="dropdown icon"></i>
      <div className="menu">
        <div className="header">Twoje Uczelnie:</div>
        <a className="item" href="#">Politechnika</a>
        <a className="item" href="#">Uniwersytet</a>
      </div>
    </div>
    <div className="ui simple dropdown item">
      Zmien Kierunek <i className="dropdown icon"></i>
      <div className="menu">
        <div className="header">Twoje Kierunki:</div>
        <a className="item" href="#">Informatyka</a>
        <a className="item" href="#">Bioinformatyka</a>
      </div>
    </div>
  </div>
  </div>
);

export default Navbar;
