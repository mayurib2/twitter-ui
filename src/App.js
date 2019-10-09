import React from 'react';
import './App.css';
import RecentTweets from './components/RecentTweets';
import { Navbar } from "react-bootstrap";


function App() {
  return (
    <div className="App container">
      <Navbar style={{"background-color": "lightblue"}}>
        <Navbar.Brand>Twitter</Navbar.Brand>
      </Navbar>
      
      <RecentTweets></RecentTweets>
    </div>
  );
}

export default App;
