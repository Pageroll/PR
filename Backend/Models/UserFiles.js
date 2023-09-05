const mongoose = require("mongoose")
const { Schema } = mongoose


const UserSchema = new Schema ({
    Roll_No:{
        type: String,
        // required: true
    },

    DOB:{
        type: Number,
        // required: true
    }
})

module.exports = mongoose.model("user", UserSchema)

