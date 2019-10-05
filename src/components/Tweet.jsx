import React, { PureComponent } from 'react'
import { Card, Col } from 'react-bootstrap';
import CustomLIkeHeart from './CustomLIkeHeart';


const tweetCardStyle = {
    width: '30rem',
    margin: '20px'
}


class Tweet extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            checked: false
        }
    }

    onClick = (evnet, props) => {
        if (!this.state.checked) {
            console.log("Like is true");
        } else {
            console.log("Like is false");
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
                    <Card.Header>ID : {tweet.id} UserName : {tweet.user.name} </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {tweet.text}
                        </Card.Text>
                        {/* <h1>{checked ? 'checked' : 'unchecked'}</h1> */}


                    </Card.Body>
                    <Card.Footer>
                        <CustomLIkeHeart checked={checked} onClick={this.onClick}></CustomLIkeHeart>
                    </Card.Footer>
                    {/* <button value="Delete" onClick={event => this.deleteTweet(tweet.id)}>  Delete Tweet </button> */}
                </Card>
            </Col>

        )
    }
}

export default Tweet