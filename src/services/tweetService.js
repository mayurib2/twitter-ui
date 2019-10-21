import axios from "axios";

export const tweetService = {
    getRecentTweet,
    postfavTweet,
    getFavorites,
    deletefavTweet,
    postTweet,
    postRetweet,
    unRetweet
}

export const apiConfig = {
    endpointURL: "http://localhost:3001"
}

function getRecentTweet() {

    const requestOption = {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    }
    return fetch(`${apiConfig.endpointURL}/recent_tweets`, requestOption).then(res => {
        //            console.log(res.json());
        return res.json();
    })
}

function getFavorites(id) {

    const requestOption = {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    }
    return fetch(`${apiConfig.endpointURL}/fav_list`, requestOption).then(res => {
        //            console.log(res.json());
        return res.json();
    })
}

function postfavTweet(id) {
    const requestOption = {
        method: 'POST',
        body: JSON.stringify({
            "tweet_id": id
        }),
        headers: {"Content-Type": "application/json"}
    }
    return fetch(`${apiConfig.endpointURL}/post_favorites`, requestOption).then(res => {
        //            console.log(res.json());
        return res.json();
    })
}

function deletefavTweet(id) {
    const requestOption = {
        method: 'POST',
        body: JSON.stringify({
            "tweet_id": id
        }),
        headers: {"Content-Type": "application/json"}
    }
    return fetch(`${apiConfig.endpointURL}/post_favoritesDestroy`, requestOption).then(res => {
        //            console.log(res.json());
        return res.json();
    })
}

function postTweet(tweet_text) {
    console.log("Inside tweetService postTweet ", tweet_text);
    return axios.post(`${apiConfig.endpointURL}/post_tweet`,
        {tweet_text: tweet_text},
        {headers: {'Content-Type': 'application/json'}}
    );
}

function postRetweet(id) {
    const requestOption = {
        method: 'POST',
        body: JSON.stringify({
            "tweet_id": id
        }),
        headers: {"Content-Type": "application/json"}
    }
    return fetch(`${apiConfig.endpointURL}/retweet`, requestOption).then(res=> {
                    return res.json();
                })
}

function unRetweet(id) {
    const requestOption = {
        method: 'POST',
        body: JSON.stringify({
            "tweet_id": id
        }),
        headers: {"Content-Type": "application/json"}
    }
    return fetch(`${apiConfig.endpointURL}/unretweet`, requestOption).then(res => {
        //            console.log(res.json());
        return res.json();
    })
}