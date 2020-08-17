var fs = require('fs')
var https = require('https')

const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

var certOptions = {
  key: fs.readFileSync(path.resolve(__dirname, '../server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../server.crt'))
}

// require routers:
const testRouter = require('./routes/testrouter');

// parse req body:
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the dist folder on the route
  app.use('/', express.static(path.join(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// TEST router
app.use('/test', testRouter);
app.use('/facebook',
(req,res) => console.log('fb stuff received !!!! <<<<')
)

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

// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });

https.createServer(certOptions, app).listen(PORT, () => { console.log(`Listening on port ${PORT}...`); })

module.exports = app;
