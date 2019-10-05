import React, { PureComponent } from 'react'
import Tweet from './Tweet';
import { tweetService } from '../services/tweetService';


class RecentTweets extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tweets: []
        }
        this.postSuccess = this.postSuccess.bind(this);
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
            console.log(reason);
        });
    }


    refresh() {
    }

    postSuccess(tweet) {
        this.setState({
            tweets: this.state.tweets.concat(tweet)
        })
    }

    render() {
        return (
            <div>

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