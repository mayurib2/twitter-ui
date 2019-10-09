import React, { PureComponent } from 'react'
import {Col, Form, Button, FormControl} from "react-bootstrap";
import Tweet from './Tweet';
import { tweetService } from '../services/tweetService';


class RecentTweets extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tweets: [],
            searchquery:""
        }
        this.postSuccess = this.postSuccess.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        tweetService.getRecentTweet()
        .then(json=> {
            console.log(json);
            this.setState({
                tweets: json
            });
        })
        .catch(reason=> {
            //console.log(reason);
        });
    }


    refresh() {
    }

    postSuccess(tweet) {
        this.setState({
            tweets: this.state.tweets.concat(tweet)
        })
    }
    
    handleChange =  event =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    //Sneha Patil
    //searchTweets api request would be sent and user is shown with the search results
    onClick = async event => {
        event.preventDefault();
        const url="http://localhost:3001/searchTweets" + "/" + this.state.searchquery;
        console.log(url);
        fetch(url, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(response => response.json().then(tweets =>{ 
            console.log(tweets);           
            this.setState({tweets: tweets})
            }));
    }

    render() {
        return (
            
            <div>
                <Col md={{ span: 6, offset: 3 }}>
                <Form style={{"margin-left": "20px"}} inline>
                    <FormControl type="text" placeholder="Search" id="searchquery" onChange={this.handleChange} className=" mr-sm-2" />
                    <Button type="submit" onClick={this.onClick}>Search</Button>
                </Form>
                </Col>
                {
                    this.state.tweets.map(tweet=> {
                        return (<Tweet tweet={tweet} key={tweet.id}/>);
                    })
                }

            </div>
            
        )
    }
}

export default RecentTweets