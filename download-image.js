var request = require('request');
var fs = require('fs');

request.get('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('downloading image...');
       })
       .on('end', function (end) {
         console.log('download complete.');
       })
       .pipe(fs.createWriteStream('./downloaded.png'));