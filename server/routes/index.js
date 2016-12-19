var express = require('express');
var router = express.Router();
var Blob = require('../models/blob');

router.get('/', function(req, res, next) {
  res.send('Hello, World!');
});

// *** api routes *** //
router.get('/blobs', findAllBlobs);
router.get('/blob/:id', findBlobById);
router.post('/blobs', addBlob);
router.put('/blob/:id', updateBlob);
router.delete('/blob/:id', deleteBlob);


// *** get ALL blobs *** //
function findAllBlobs(req, res) {
  Blob.find(function(err, blobs) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(blobs);
    }
  });
}

// *** get SINGLE blobs *** //
function findBlobById(req, res) {
  Blob.findById(req.params.id, function(err, blob) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(blob);
    }
  });
}
