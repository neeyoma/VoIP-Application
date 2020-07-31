var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const accountSid = 'ACd74608606c03c4dfee64ee1f99f6a7a8';
const authToken = '82c79a69f75918e4413931e3022f1a4c';
const client = require('twilio')(accountSid, authToken);
var Pusher = require('pusher');


var pusher = new Pusher({
  appId: '649513',
  key: '3c0d77e77d223cba00f9',
  secret: 'd79fe0d8600a96f55a2a',
  cluster: 'us2',
  encrypted: true
});


/* POST on chat page. */
router.post('/', function (req, res, next) {
  
  var message = req.body.message;
  var from = '+12262416814';
  var to = req.body.phone;
  pusher.trigger( 'my-channel', 'my-event', { message });

    client.messages
        .create({
            body: message,
            from: from,
            to: to
        })
        .then(message => console.log(message.sid))
        .done();

  res.sendStatus(200);

});

/* POST on chat page. */
router.get('/:id/:phone', function (req, res, next) {
  
  console.log("Hello oo",req.params.id);
  console.log(req.params.phone);

  res.render('chat', {phone:req.params.phone})
});

/* GET chat page. */
router.get('/', function(req, res, next) {
  res.render('chat');
});


module.exports = router;