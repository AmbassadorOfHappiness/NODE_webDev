const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');

  res.setHeader('Content-Type', 'text/html');

  const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

  let basePath = '';
  switch (req.url) {
    case '/':
      basePath = createPath('index');
      res.statusCode = 200; //---ДОБАВЛЕНИЕ СТАТУС КОДА В ОТВЕТ
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/contacts');
      res.end();
      break;
    case '/contacts':
      basePath = createPath('contacts');
      res.statusCode = 200; //---ДОБАВЛЕНИЕ СТАТУС КОДА В ОТВЕТ
      break;
    default:
      basePath = createPath('error');
      res.statusCode = 404; //---ДОБАВЛЕНИЕ СТАТУС КОДА В ОТВЕТ
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500; //---ДОБАВЛЕНИЕ СТАТУС КОДА В ОТВЕТ
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  })
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});