const request = require('graphql-request').request;
const twitter = require('twitter');

const endpoint = 'https://icanhazdadjoke.com/graphql'

const query = `{
  joke {
    joke
  }
}`

const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

async function getDadJoke() {
	const data = await request(endpoint, query);
	console.log(data.joke.joke);
	return data.joke.joke;
}

async function sendTweet(joke) {
	client.post('statuses/update', {status: joke}, function(error,tweet,response) {
		if(error) throw error;
		console.log(tweet);
		console.log(response);
	});
}

exports.twitterbot = async (event) => {
    const joke = await getDadJoke() ;
    return sendTweet(joke);
};

