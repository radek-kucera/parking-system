var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser');
var sgMail = require('@sendgrid/mail');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

/*
sengrid api key and html templates
*/
sgMail.setApiKey('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')
templates = {
    rezervation_confirm: "d-cb74cabd5c8b4b52a53284bfc93cdc08",

};

/*
rest api
*/

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/confirm-reservation',(req,res) => {
    if (req.body.emailto)
    {
    console.log('existuje\n')
    const msg = {
        to: req.body.emailto, // Change to your recipient
        from: 'krysak@vojtechpetrasek.com', // Change to your verified sender
        templateId: templates['rezervation_confirm'],
        dynamic_template_data: {
            "spot":100,
            "timefrom": "10.4 10:00 AM",
            "timeto": "10.4 10:00 PM "
        }
      }
      sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
    }
});

app.listen(3000, () => console.log('Listening on port 3000...'));