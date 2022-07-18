const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({

    authorName:{
        type: String,
        required:[true, "Must enter name"],
        minLength: [3, "Name must be at least 3 characters"]
    }

}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;  