const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require('path')
const router = jsonServer.router(path.join('./data', 'db.json'))
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares);

router.render = function (req, res) {
  res.jsonp({
    data: res.locals.data,
    pagination: res.get("Link"),
  });
};

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  next();
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON server is running at http://localhost:${port}`);
});
