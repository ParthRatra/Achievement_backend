const mongoose = require('mongoose');

const likes = new mongoose.Schema(
    {
        postID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Userpost', // Refers to the Userpost model for the post being liked
            required: true
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Signup', // Refers to the Signup model for the user who liked the post
            required: true
        },
      
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Likes", likes);