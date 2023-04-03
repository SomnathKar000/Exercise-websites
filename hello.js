// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <button id="clickMe" onclick="alert('Sending')" >Send</button>
  
      <script>
          function send(){
              alert('Thank you for your help');
          }
          // clickMe.onclick = send
          clickMe.addEventListener('click', send)
          clickMe.addEventListener('click', function(){
              alert('Good day!');
          })
          clickMe.removeEventListener("click",send)
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});