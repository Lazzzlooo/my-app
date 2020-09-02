import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Header from "./components/Header/Header";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Profile from "./components/Profile/Profile";
import Chats from "./components/Chats/Chats";
import Posts from "./components/Posts/Posts";
import UsersContainer from './components/Users/UsersContainer';


function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <Header store={props.store}/>
        <ul className="box">
          <li className="box__item"><Sidemenu/></li>
          <li className="box__item">
            <Route path='/profile' render={() => <Profile store={props.store}/>}/>
            <Route path='/users' render={() => <UsersContainer />}/>
            <Route path='/chats' render={() => <Chats store={props.store}/>}/>
            <div id='post'><Route  path='/feed' render={() => <Posts store={props.store}/>}/></div>
          </li>
        </ul>

      </div>
    </BrowserRouter>
  );
}

export default App;
