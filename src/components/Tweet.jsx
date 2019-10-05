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
            favCount: this.props.tweet.favorite_count
        }
    }

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

    deleteTweet(id) {
        console.log("called delete", id);

    }

    render() {
        const tweet = this.props.tweet;
        const { checked } = this.state;
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
                    </Card.Footer>
                    {/* <button value="Delete" onClick={event => this.deleteTweet(tweet.id)}>  Delete Tweet </button> */}
                </Card>
            </Col>

        )
    }
}

export default Tweet