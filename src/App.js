import React from 'react';
import './App.css';
import RecentTweets from './components/RecentTweets';
import {Navbar} from "react-bootstrap";
import PostTweet from "./components/PostTweet";


function App() {
    return (
        <div className="App container">
            <Navbar style={{"background-color": "lightblue"}}>
                <Navbar.Brand>Twitter</Navbar.Brand>
            </Navbar>
            <PostTweet/>
            <RecentTweets></RecentTweets>
        </div>
    );
}

export default App;
