const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"],
    },
    email: {
        type: String,
        required: [true, "Email required"],
    },

    country: {
        type: String,
        required: [true, "Country required"],
    },
    state: {
        type: String,
        required: [true, "State required"],
    },
    city: {
        type: String,
        required: [true, "City required"],
    },
    phone: {
        type: String ,   
        required: [true, "Mobile number required"],
        trim: true,
        maxlength:10,
        minlength: 10,
    },
    fromDate: {
        type: String,
        required: [true, "From Date required"],
    },
    toDate: {
        type: String,
        required: [true, "To Date required"],
    },
})

// userSchema.plugin(uniquevalidator)
module.exports = mongoose.model("booking_", bookingSchema)