import React, {PureComponent} from 'react'
import {Col, Form, Button, FormControl} from "react-bootstrap";
import {tweetService} from '../services/tweetService';

// Mayuri Bhise
class PostTweet extends PureComponent {
    state = {tweet_text: ''};

    onClick = async event => {
        console.log("INSIDE onClick this.state.tweet_text = ", this.state.tweet_text);
        event.preventDefault();
        try {
            let postTweetResponse = await tweetService.postTweet(this.state.tweet_text);
            console.log("postTweetResponse = ", postTweetResponse);
            this.setState({tweet_text: ''});
        } catch (err) {
            console.log("Unable to post tweet ", err);
        }
    }

    render() {
        return (
            <div>
                <Col md={{span: 6, offset: 3}}>
                    <Form style={{"margin-left": "20px", "margin-bottom": "20px", "margin-top": "20px"}} inline>
                        <FormControl type="text" placeholder="Write tweet here" id="tweetText"
                                     onChange={event => this.setState({tweet_text: event.target.value})}
                                     className=" mr-sm-2"/>
                        <Button type="submit" onClick={this.onClick}>Submit</Button>
                    </Form>
                </Col>
            </div>

        )
    }
}

export default PostTweet
