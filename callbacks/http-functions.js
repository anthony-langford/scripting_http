module.exports = function getHTML (options, callback) {

    var https = require('https');

    https.get(options, function (response) {

    response.setEncoding('utf8');

    var dataChunks = '';

    response.on('data', function (data) {
      dataChunks += data;
      console.log('Chunk Received. Length:', data.length);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(dataChunks);
    });
  });
};