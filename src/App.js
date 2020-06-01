import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Profile from "./components/Profile";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="box">
          <Sidemenu />
          <Profile />
      </div>
       <div className="box">
           <Post />

       </div>
    </div>
  );
}

export default App;
