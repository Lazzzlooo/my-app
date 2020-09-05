import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Chats from "./components/Chats/Chats";
import Posts from "./components/Posts/Posts";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <ul className="box">
          <li className="box__item"><Sidemenu/></li>
          <li className="box__item">
            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
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
