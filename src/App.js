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
      <Header />
      <div className="box">
          <Sidemenu />
          <Profile />
      </div>
       <div className="box">
           <Calendar />
           <Posts />
       </div>
    </div>
  );
}

export default App;
