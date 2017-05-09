var express = require('express');
var router = express.Router();
var deepstream = require('deepstream.io-client-js')
const deepstream_client = deepstream('localhost:6020').login()

router.post('/', function(req, res) {
    deepstream_client.event.emit('backend/sample', 'I am form remi deepstrm server. :D')
    return res.send({
        'status': 'success'
    });
});

//export this router to use in our index.js
module.exports = router;