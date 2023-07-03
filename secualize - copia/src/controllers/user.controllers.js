const User = require("../../models/user.models");
const metodos = {};

metodos.renderIndex = (req, res) => {
  res.render("index");
};

metodos.p = (req, res) => {
  res.render("prueba");
};

metodos.lista = (req, res) => {
  res.render("lista_reservas");
};

metodos.editar = (req, res) => {
  res.render("editar_reservas");
};

metodos.getUsers = (req, res) => {
  res.status(200).json(users);
};

metodos.crearUsuarios = (req, res) => {
  const { username, email, password } = req.body;
  const newUser = { username, email, password };
  if (!username || !password) {
    return res.status(400).json({
      msg: "faltan datos",
    });
  }

  res.status(200).json({
    msg: "usuario creado",
    newUser,
  });
};

module.exports = metodos;
