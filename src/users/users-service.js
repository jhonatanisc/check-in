const usersRepository = require("./users-repository");

const index = async (req, res, next) => {
  try {
    const users = await usersRepository.getAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await usersRepository.get(id);
    if (!user) {
      return res.status(404).json({ error: `No user found with id ${id}` });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const make = async (req, res, next) => {
  const { body } = req;
  try {
    const newUser = await usersRepository.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedUser = await usersRepository.update(id, body);
    if (!updatedUser) {
      return res.status(404).json({ error: `No user found with id ${id}` });
    }
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await usersRepository.destroy(id);
    if (!deleted) {
      return res.status(404).json({ error: `No user found with id ${id}` });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { index, show, make, edit, remove };
