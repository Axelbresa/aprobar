const {
  getUsers,
  renderIndex,
  editar,
  p,
  lista,
} = require("../controllers/user.controllers");

const routes = require("express").Router();

routes.get("/users", renderIndex);

routes.get("/p", p);

routes.get("/res", editar);

routes.get("/lista", lista);

module.exports = routes;
