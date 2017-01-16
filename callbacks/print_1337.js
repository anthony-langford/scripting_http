var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print_1337(html) {
  console.log(html.replace(/ck/g, 'x').replace(/er/g, '0r').replace(/you/g, 'j00').replace(/a/g, '4').replace(/e/g, '3').replace(/l/g, '1').replace(/o/g, '0').replace(/s/g, '5').replace(/t/g, '7'));
}

getHTML(requestOptions, print_1337);