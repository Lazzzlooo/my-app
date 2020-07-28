import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Header from "./components/Header/Header";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Profile from "./components/Profile/Profile";
import Chats from "./components/Chats/Chats";
import Posts from "./components/Posts/Posts";


function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <Header store={props.store}/>
        <ul className="box">
          <li className="box__item"><Sidemenu/></li>
          <li className="box__item">
            <Route path='/chats' render={() => <Chats store={props.store}/>}/>
            <Route path='/profile' render={() => <Profile store={props.store}/>}/>
            <Route path='/feed' render={() => <Posts store={props.store}/>}/>
          </li>
        </ul>

      </div>
    </BrowserRouter>
  );
}

export default App;
