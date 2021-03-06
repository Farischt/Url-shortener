# Url-shortener by Faris CHTATOU

## Installation

First, you'll need node.js and node package manager "npm" installed : [https://nodejs.org/en/].

- Our version of node.js : v14.17.0.
- Our version of npm : v7.12.1.

## Technologies

Our project uses the following technologies :

- React library for the front-end
- Node.js with express framework for the back-end
- A MongoDb database.

## Getting Started

```bash
npm install --save
cd client
npm install --save
cd ../server
npm install --save
```

Once all the packages are installed go inside server folder, and create a .env file to be filled as .env.example. The application won't run without the environnement variables, since the database connection won't be established.

The application runs locally : <br/>
Front : PORT-3000 <br/>
Back : PORT-5000

The Front is using a proxy to make the api calls

When everything is set-up, run the following command on the root:

```bash
npm run dev
#or
npm start
```

We are using concurrently to run both frontend and backend at the same time with one command

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
