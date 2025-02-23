module.exports = function (app) {
  // Rutas para el modelo users
  const usersRoutes = require("./src/users");
  app.use("/users", usersRoutes);
};
