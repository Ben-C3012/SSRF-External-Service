const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    // results: users.length,
    users
  });
}

exports.getUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    user : '<User here...>'
  });
}

exports.createUser = async (req, res) => {
  // create a new user in mongodb with mongoose
  try {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      user: newUser
    }
  })} catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: '<Updated user here...>'
    }
  });
}

exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
}

