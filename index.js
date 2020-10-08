var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

//here trying to make it into one thing to get what I want depending on url
//can't get it to read and write the files

const server = http.createServer((req,res) => {

  if(req.url === '/'){
    
    fs.readFile('public.txt', 'utf8', function(err, html){
      res.writeHeader(200, {"Content-Type": "text/html"});  
      res.write(html);  
      res.end();  
  
    });

  }//end of if

  if(req.url === '/secret?key=ALBATROSS'){
    fs.readFile('./secret.html', function (error, html) {
         res.writeHeader(200, {"Content-Type": "text/html"});  
         res.write(html);  
         res.end();  
       });
  }

});

server.listen(3000);

  //can get either of these two codes to run fine on their own, but can't get the specific routing to work
  //fixed it see above

  // fs.readFile('./secret.html', function (err, html) {

  //   if (err) throw err;
  
  //   http.createServer(function(request, response) {  
  //       response.writeHeader(200, {"Content-Type": "text/html"});  
  //       response.write(html);  
  //       response.end();  
  //     }).listen(3000);
  //  });


/*   fs.readFile('public.txt', function (err, html) {

    if (err) throw err;    
  
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
      }).listen(3000);
   }); */





