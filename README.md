
# No Server November Challenge Number 2

See this page [NoServerNovember](https://serverless.com/blog/no-server-november-challenge/)

First challenge : 

>Build a Twitter Bot.
> Write a serverless-backed Twitter bot. Make it tweet dad jokes. That’s really all there is to it.

I decided to use the GraphQL endpoint to get jokes from as something new I hadn't done before.

### Prerequisites

To try out this example you will need to install the Serverless Framework for your platform from here : 

[Install Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)

Assume you have created a file with your AWS credentials in __~./aws/credentials__ as the Serverless Framework will require these to be able to run.

You will need to create a serverless.emv.yml file in with your relevant Twitter API Keys :

```
cat serverless.env.yml
twitter:
  TWITTER_CONSUMER_KEY: 'KEY HERE'
  TWITTER_CONSUMER_SECRET: 'SECRET HERE'
  TWITTER_ACCESS_TOKEN_KEY: 'TOKEN KEY HERE'
  TWITTER_ACCESS_TOKEN_SECRET: 'TOKEN SECRET HERE'
```

### Running Serverless Framework

Assume you have created a file with your AWS credentials in __~./aws/credentials__ as the Serverless Framework will require these to be able to run.

To get the dependencies installed run:
```
npm install
```
To create the infrastructure run:
```
sls deploy
```
Once you have finished you can destroy the infrastructure with : 
```
sls remove 
```
