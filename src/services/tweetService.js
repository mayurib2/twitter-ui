
export const tweetService  = {
    getRecentTweet, 
    favTweet
}

export const apiConfig = {
    endpointURL: "http://localhost:3001"
}

function getRecentTweet() {

    const requestOption = {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    }
  return fetch(`${apiConfig.endpointURL}/recent_tweets`, requestOption).then(res=> {
        //            console.log(res.json());
                    return res.json();
                })
}

function favTweet(id) {

}