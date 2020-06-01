import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Profile from "./components/Profile";
import Post from "./components/Post";
import Calendar from "./components/Calendar";

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
           <Post />

       </div>
    </div>
  );
}

export default App;
