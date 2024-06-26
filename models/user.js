const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNo: { type: String, required: true, match: /^\d{10}$/ },
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true }
    },
    loginId: { type: String, required: true, match: /^[a-zA-Z0-9]{8}$/ },
    password: { type: String, required: true, match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/ },
    creationTime: { type: Date, default: Date.now },
    lastUpdateOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
