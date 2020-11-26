const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

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

server.listen(3000, () => {
  console.log("JSON Server is running");
});
