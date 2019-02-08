const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile('index.html', {root : __dirname})
});

app.get('/test', (req, res) => {
	res.send('olleeeeeee');
});


//Start server
app.listen(port, () => console.log('Listening on port: ', port))

module.exports = app;