const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A company must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A company name must have less or equal then 40 characters'],
        minlength: [10, 'A company name must have more or equal then 10 characters']
    },
 
    address: String,
    revenue: Number,
    phone: String
});

const Company = mongoose.model('Company', companySchema)

module.exports = Company;