import React, { PureComponent } from 'react'
import { Card, Col } from 'react-bootstrap';
import CustomLIkeHeart from './CustomLIkeHeart';
import { tweetService } from '../services/tweetService';

const tweetCardStyle = {
    width: '30rem',
    margin: '20px'
}


class Tweet extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            checked: false,
            favCount: this.props.tweet.favorite_count,
            retweeted: false,
            color: 'red'
        }
    }

    //Rashmi Sarode
    //Post like on tweet function
    onClick = (evnet, props) => {
        let id = this.props.tweet.id_str;

        if (!this.state.checked) {
            console.log("Like is true");
            tweetService.postfavTweet(id)
                .then(json => {
                    console.log(json);
                    this.setState({
                        favCount: json.favorite_count
                    })
                })
                .catch(reason => {
                    console.log(reason);
                });

        } else {
            console.log("Like is false");
            tweetService.deletefavTweet(id)
                .then(json => {
                    console.log(json);
                    this.setState({
                        favCount: json.favorite_count
                    })
                })
                .catch(reason => {
                    console.log(reason);
                });
        }
        this.setState({ checked: !this.state.checked });
    }

    //Sneha Patil
    //DestroyTweet api will be called with the tweet id
    deleteTweet(id) {
        console.log("called delete", id);
        const url="http://localhost:3001/destroyTweet" + "/" + id;
        console.log(url);
        fetch(url, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(response => response.json().then(tweets =>{ 
            console.log(tweets); 
        }));
    }

    //Indrayani Bhalerao
    retweet = () => {
        let id = this.props.tweet.id_str;

        if (!this.state.retweeted) {
            console.log("Retweet is true");
            tweetService.postRetweet(id)
                .then(json => {
                    console.log(json);
                    this.setState({
                        color: 'green',
                    })
                })
                .catch(reason => {
                    console.log(reason);
                });

        } else {
            console.log("Retweet is false");
            tweetService.unRetweet(id)
                .then(json => {
                    console.log(json);
                    this.setState({
                        color: 'red',
                    })
                })
                .catch(reason => {
                    console.log(reason);
                });
        }
        this.setState({ retweeted: !this.state.retweeted });
    }   

    render() {
        const tweet = this.props.tweet;
        const { checked } = this.state;
        const {color} = this.state;
        const retweetButtonStyle = {"fontSize":"30px","color": color}

        return (
            <Col md={{ span: 6, offset: 3 }}>
                <Card border="dark" style={tweetCardStyle}>
                    <Card.Header> UserName : {tweet.user.name} </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {tweet.text}
                        </Card.Text>
                        {/* <h1>{checked ? 'checked' : 'unchecked'}</h1> */}


                    </Card.Body>
                    <Card.Footer>
                        <CustomLIkeHeart checked={checked} onClick={this.onClick} style={{margin:'10px'}}></CustomLIkeHeart>
                        <a style={{margin:'10px'}}>{this.state.favCount}</a>

                        {
                            
                            <button value="Delete" onClick={event => this.deleteTweet(tweet.id_str)}><i className="fa fa-trash-o" style={{"fontSize":"30px","color":"red"}}></i></button> 
                        }

                        &emsp;
                        <button value="Retweet" onClick={event => this.retweet(tweet.id_str)}>
                            {
                             <i className="fa fa-retweet" style={retweetButtonStyle}></i>
                            }

                        </button>
                    </Card.Footer>
                    {/* { <button value="Delete" onClick={event => this.deleteTweet(tweet.id_str)}>  Delete Tweet <i class="fa fa-trash-o" ></i></button> } */}
                </Card>
            </Col>

        )
    }
}

export default Tweet