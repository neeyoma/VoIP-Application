var express = require('express');
var router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
var Pusher = require('pusher');


var pusher = new Pusher({
  appId: '649513',
  key: '3c0d77e77d223cba00f9',
  secret: 'd79fe0d8600a96f55a2a',
  cluster: 'us2',
  encrypted: true
});

router.post('/', function(req, res, next) {
  
  const twiml = new MessagingResponse();

  if (req.body.Body){
      // console.log(Object.keys(req.body));
      var message = req.body.Body;
      pusher.trigger( 'my-channel', 'my-sms-event', { message });

  }
res.writeHead(200, { 'Content-Type': 'text/xml' });
res.end(twiml.toString());


});

module.exports = router;
