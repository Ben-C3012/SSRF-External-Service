 const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'A user must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A user name must have less or equal then 40 characters'],
        minlength: [10, 'A user name must have more or equal then 10 characters']
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
        trim: true,
        maxlength: [40, 'A user email must have less or equal then 40 characters'],
        minlength: [10, 'A user email must have more or equal then 10 characters']
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        trim: true,
        maxlength: [15, 'A user password must have less or equal then 40 characters'],
        minlength: [10, 'A user password must have more or equal then 10 characters']
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User;