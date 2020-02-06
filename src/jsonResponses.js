// Note this object is purely in memory
const users = {};

const respondJSON = (request, response, status, object) => {
  response.writeHead(status, {'Content-Type': 'application/json'});
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  response.writeHead(status, {'Content-Type': 'application/json'});
  response.end();
};

const getUsers = (request, response) => {
  respondJSON(request, response, 200, { users });
};

const getUsersMeta = (request, response) => {
  respondJSONMeta(request, response, 200);
};

const updateUser = (request, response) => {
  const newUser = { created_at: Date.now() };

  users[newUser.created_at] = newUser;

  respondJSON(request, response, 201, newUser);
};

const notFound = (request, response) => {
  respondJSON(request, response, 404, {
    message: 'Page was not found',
    id: 'notFound'
  });
};

const notFoundMeta = (request, response) => {
  respondJSONMeta(request, response, 404);
};

module.exports = {
  getUsers,
  getUsersMeta,
  updateUser,
  notFound,
  notFoundMeta,
};
