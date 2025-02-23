const { Router } = require("express");
const usersService = require("./users-service");
const router = Router();
// Rutas CRUD
router.get("/", usersService.index); // Obtener todos los usuarios
router.get("/:id", usersService.show); // Obtener un usuario por ID
router.post("/", usersService.make); // Crear un nuevo usuario
router.put("/:id", usersService.edit); // Actualizar un usuario existente
router.delete("/:id", usersService.remove); // Eliminar un usuario existente
module.exports = router;
