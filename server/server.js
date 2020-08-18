var fs = require('fs')
var https = require('https')

const express = require('express');
const app = express();

const PORT = 3000;
const path = require('path');
// Require Routers:
const userRouter = require('./routes/userRouter');

// >> used to make a httpS server (for FB API)
var certOptions = { 
  key: fs.readFileSync(path.resolve(__dirname, '../server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../server.crt'))
}

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// When starting server from "production" dev server
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../dist'))); // statically serve everything in the dist folder
  app.get('/', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../dist/index.html')); // send the index.html to browser
  });
}

// ======= MAIN ROUTER ========== //
app.use('/', userRouter);
// ====== ^MAIN ROUTER^ ========= //

// catch-all route handler for req to unknown routes
app.use((req, res) => {
  return res.status(404).send('Page not found. TRY AGAIN!');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error!',
    status: 500,
    message: { err: 'An error occurred!' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// listening; notice this is modified for https
https.createServer(certOptions, app).listen(PORT, () => { console.log(`Listening on port ${PORT}...`); })

module.exports = app;
