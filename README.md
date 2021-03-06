# SlashURL

This is a Node.JS web application powered by Express that provides the main functionality that you'd expect from a URL Shortener service.

## Features
  - Fast
  - Lightweight
  - Minimalistic
  - REST API microservice
  - Other awesome features to be implemented

### Motivation
The main motivation behind this project was to learn about NodeJS, MongoDB and integration of Redis as a secondary database and how it affects the overall performance of the web applications.

# Usage and Demo

The project also contains a front-end and can be deployed easily on a platform(e.g. [Heroku](https://www.heroku.com/)). The main motivation behind this project is to make use of REST API created to develop a browser extension

![Demo Image](https://i.imgur.com/Ejhbmlg.png)

## Setup
Clone this repo to your desktop and run `npm install` to install all the dependencies.

You might want to look into `config.js` to make change the port you want to use and any other required

### Tech Used

SlashURL uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [MongoDB] - cross-platform document oriented database
* [Redis] - open source in-memory database
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [jQuery] - duh

## Development

Want to contribute? Great! Let's set it up first.
#### Installation

SlashURL requires [Node.js](https://nodejs.org/), [MongoDB](https://www.mongodb.com/) and [Redis](https://redis.io/) to run.

Open up the terminal and type the following command to fire up the instance of MongoDB.

```sh
$ mongod
```

Open another terminal and get to the project folder.
Install the dependencies and start the server.

```sh
$ git clone https://github.com/UtkarshGpta/slash-url.git
$ cd slash-url
$ npm install -d
$ node start
```
You can also use [Nodemon](https://nodemon.io/) using ```nodemon app.js``` instead of npm start every time you make changes in the project.

# To-Dos
---
 - Write tests for this app
 - Make a Chrome/Firefox extension using which we can select the URL to be shortened on the page, right click and select the option to shorten the URL, which then connects to our REST API, retrieves and copies to the clipboard - the shortened URL.

## Acknowledgement
I started off learning about creating URL Shortener through this [blog](https://coligo.io/create-url-shortener-with-node-express-mongo/) where they used [Mongoose](https://mongoosejs.com/) instead of Native Mongo driver. 

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [MongoDB]: <https://www.mongodb.com/>
   [Redis]: <https://redis.io/>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
