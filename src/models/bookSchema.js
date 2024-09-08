const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title :{
        type : String
    },
    author :{
        type : String
    },
    description :{
        type : String
    },
    isBorrowed :{
        type : Boolean,
    }
})

module.exports = mongoose.model("Book",bookSchema);
