var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var dataChunks = [];

    response.on('data', function (data) {
      dataChunks.push(data);
      console.log('Chunk Received. Length:', data.length);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(dataChunks);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);