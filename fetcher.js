const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);

//use the request package to request a webpage
request(args[0], (error, response, body) => {

  //write the body of the webpage
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return; 
    }
    console.log(`Downloaded and saved ${body.length} bytes ${args[1]}`)
  });

});




