const mongoose=require('mongoose');


const post = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Signup', // Refers to the Signup model for the user who made the post
            required: true
        },
        title:{
            type:String,
            required:true,
            trim:true
        },
    
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Likes' // Refers to the Likes model for storing likes on this post
        }],
        description:{
            type:String,
            required:true,
        },
        Image:{
            type:String,
            required:true,
        },
        achievements: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Achievement' // Refers to the Achievement model for storing achievements related to this post
        }],

    },
    {
        timestamps: true,
    }
)

// Userpost collection
module.exports = mongoose.model("Userpost", post);