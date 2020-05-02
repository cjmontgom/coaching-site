const axios = require( 'axios');
const bodyParser = require('body-parser');

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

const DIST_DIR = path.join(__dirname, '/dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(bodyParser.json())

app.use(express.static(DIST_DIR));

// a route to test the server is running properly
app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
});

const mailchimpInstance = "us19";
const listUniqueId = "f6e9d549ae";
const mailchimpApiKey = "90f558876113ebf9af929f702156068d-us19";


app.post('/signup', function (req, res) {
    console.log('in the server');
    console.log("request body in server " + req.body.email);
    //request body {"EMAIL":"email@evmail.com","subscribe":""}
    axios({
        method: "post",
        url: 'https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/',
        headers: {
            'Authorization': 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'),
            'Content-Type': 'application/json;charset=utf-8'
        },
        data:{
            'email_address': req.body.email,
            'status': 'subscribed'
        }
    })
        .then(r => {
            res.status(200);
            res.send("Success! Your message has been sent.", r);
        })
        .catch(r => {
            console.log(r.response.data.error);
            res.send('error')
        });
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});



