var mongoose = require('mongoose');

var user = mongoose.model('user', {
    emailaddress: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {user};