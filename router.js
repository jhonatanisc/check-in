module.exports = function (app) {
  // Rutas para el modelo users
  const usersRoutes = require("./src/users/users-routes");
  app.use("/users", usersRoutes);
};
