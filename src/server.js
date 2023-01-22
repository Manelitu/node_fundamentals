import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === "/users") {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users));
  }

  if (method === 'POST' && url === "/users") {
    users.push({
      id: 1,
      name: 'Any name',
      email: 'any_email@any.com'
    })
    return res.end('Create user');
  }

  return res.end('Hello world');
});

server.listen(3333);