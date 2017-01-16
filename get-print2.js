function getAndPrintHTMLChunks() {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    var dataChunks = [];
    response.on('data', function (data) {
      dataChunks.push(data);
      console.log('Chunk Received. Length:', data.length);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(dataChunks);
    });

  });
}

getAndPrintHTMLChunks()