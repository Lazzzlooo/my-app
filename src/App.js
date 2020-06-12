import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Chats from "./components/Chats/Chats";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ul className="box">
          <li className="box__item"><Sidemenu/></li>
          <li className="box__item">
            <Route path='/chats' component={Chats}/>
            <Route path='/profile' component={Profile}/>
          </li>
        </ul>

      </div>
    </BrowserRouter>
  );
}

export default App;
