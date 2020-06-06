import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Profile from "./components/Profile/Profile";
import Calendar from "./components/Calendar/Calendar";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Header/>
      <ul className="box">
        <li className="box__item"><Sidemenu/></li>
        <li className="box__item"><Profile/></li>
      </ul>
      <ul className="box">
        <li className="box__item"><Calendar/></li>
        <li className="box__item box__item--posts"><Posts/></li>
      </ul>
    </div>
  );
}

export default App;
