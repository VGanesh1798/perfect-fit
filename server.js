const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
var session_name = null;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Chat with the devs!' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      `Thanks for chatting! I received: ${req.body.post}`,
    );
});

app.post('/api/login', (req, res) => {
    console.log(`Logging in as ${req.body.post}`);
});

app.get('/api/session', (req, res) => {
  res.send({ express: 'Welcome'});
});


app.listen(port, () => console.log(`Listening on port ${port}`));
