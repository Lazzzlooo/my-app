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
        <Header state={props.state.user}/>
        <ul className="box">
          <li className="box__item"><Sidemenu/></li>
          <li className="box__item">
            <Route path='/chats' render={() => <Chats state={props.state.dialogsPage}
                                                      dispatch={props.dispatch}/>}/>
            <Route path='/profile' render={() => <Profile state={props.state.user}/>}/>
            <Route path='/feed' render={() => <Posts
              state={props.state.post}
              dispatch={props.dispatch}/>}/>
          </li>
        </ul>

      </div>
    </BrowserRouter>
  );
}

export default App;
