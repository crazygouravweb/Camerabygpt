const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-image', (req, res) => {
    const imageData = req.body.imageData;

    const options = {
        method: 'POST',
        url: 'https://api.telegram.org/bot6350980688:AAGziSMDMWP711sX8DvvvVriBUoVPVfYO4w/sendPhoto',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        formData: {
            chat_id: '6585361526',
            photo: request.blob(imageData)
        }
    };

    request(options, (error, response, body) => {
        if (error) {
            console.error('Error sending image:', error);
            res.status(500).send('Error sending image');
        } else {
            console.log('Image sent to Telegram bot');
            res.status(200).send('Image sent');
        }
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
