let users = [
  { id_usr: 1, name_usr: "Juan", lastname_usr: "Pérez" },
  { id_usr: 2, name_usr: "María", lastname_usr: "Gómez" },
];

const getAll = async () => {
  return users;
};

const get = async (id) => {
  const user = users.find((u) => u.id_usr === Number(id));
  return user || null;
};

const create = async (data) => {
  const newUser = { id_usr: users.length + 1, ...data };
  users.push(newUser);
  return newUser;
};

const update = async (id, data) => {
  const index = users.findIndex((u) => u.id_usr === Number(id));
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
};

const destroy = async (id) => {
  const index = users.findIndex((u) => u.id_usr === Number(id));
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};

module.exports = { getAll, get, create, update, destroy };
