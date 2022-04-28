const { User } = require("../models/user.model");

const getAllusers = (req, res) => {
  res.status(200).json({
    users, //arreglo de users que viene del modelo
  });
};

const createUser = async (req, res) => {
  const { name,email, password, role, status} = req.body;
  const newUser= await User.create({
    name: name,
    email: email,
    password: password,
    role: role,
    status: status,
  });

  res.status(2001).json({ newUser });
};

module.exports = { getAllusers, createUser };
