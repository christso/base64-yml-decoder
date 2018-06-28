var Base64 = require('js-base64').Base64;

var fileName = 'data.txt';

var fs = require('fs');

var fileContents = null;

fs.readFile(fileName, 'utf8', function(err, data) {
   if (err) throw err;
   fileContents = data;
   decodeFile(fileContents);
});

function decodeFile(contents) {
   var contentItems = contents.split('\n');
   var decodedItems = [];
   for (let i = 0; i < contentItems.length; i++) {
      let pair = contentItems[i].split(':');
      pair[0] = pair[0].trim();
      pair[1] = pair[1].trim();
      pair[1] = Base64.decode(pair[1]);
      decodedItems.push(pair);
   }
   console.log(decodedItems);
}
