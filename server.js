const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Chat with the devs!' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.post('/api/food', (req, res) => {
  res.send(
    `You just committed ${req.body.post} calories to the system.`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));