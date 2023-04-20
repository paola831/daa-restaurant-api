const getAllUsers = (req,res)=> res.status(200).send('GET /users secceeded');

const createUser = (req,res)=> res.status(201).send('POST /users secceeded');

const deleteUser = (req,res)=> res.status(204).send();

module.exports = { getAllUsers, createUser, deleteUser };