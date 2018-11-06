const request = require('graphql-request').request;

const endpoint = 'https://icanhazdadjoke.com/graphql'

const query = `{
  joke {
    joke
  }
}`


async function getDadJoke() {
	const data = await request(endpoint, query);
	console.log(data.joke.joke);
	return data.joke.joke;
} 

exports.twitterbot = async (event) => {
    return await getDadJoke() ;
};

