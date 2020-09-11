import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Sidemenu from './components/Sidemenu/Sidemenu';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ChatsContainer from './components/Chats/ChatsContainer';
import PostsContainer from './components/Posts/PostContainer';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer/>
        <ul className="box">
          <li className="box__item"><div className="wrapper"><Sidemenu/></div></li>
          <li className="box__item">
            <Route path='/profile/:userId?' render={() => <div className="wrapper"><ProfileContainer/></div>}/>
            <Route path='/users' render={() => <div className="wrapper"><UsersContainer/></div>}/>
            <Route path='/chats' render={() => <div className="wrapper"><ChatsContainer/></div>}/>
            <Route path='/login' render={() => <div className="wrapper"><Login/></div>}/>
            <Route path='/feed' render={() =><PostsContainer />}/>
          </li>
        </ul>

      </div>
    </BrowserRouter>
  );
}

export default App;
