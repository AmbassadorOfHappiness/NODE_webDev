// https://www.youtube.com/watch?v=1QA-wpRnpG0&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0&index=8
// https://www.youtube.com/watch?v=zH4T7AiMWqY&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0&index=9

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');
  console.log(req.url, req.method);
//---ПЕРЕДАЧА ДАННЫЙХ ИЛИ СТИЛЕЙ
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<head><link rel="stylesheet" href="#"></head>') 
  // res.write('<h1>HELLO DIMON!</h1>');
  // res.write('<p>How are you?</p>');
  // res.end(); 
//---КОНЕЦ ПЕРЕДАЧИ ДАННЫХ
  res.setHeader('Content-Type', 'application/json');
  const data = JSON.stringify([
    { name: 'Tommy', age: '25' },
    { name: 'Jimmy', age: '41' },
  ]);
  res.end(data); //---ВОЗВРАТ ДАННЫХ 
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});