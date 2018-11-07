const request = require('graphql-request').request;
const Twitter = require('twitter');

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
	const tweet = await client.post('statuses/update', {status: `${joke} - powered by AWS Lambda / serverless framework for #NoServerNovember`} );
	return tweet;
}

exports.twitterbot = async (event) => {
    const joke = await getDadJoke() ;
    return sendTweet(joke);
};
