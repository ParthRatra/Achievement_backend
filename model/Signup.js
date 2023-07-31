const mongoose=require('mongoose');

const Signup = new mongoose.Schema(
    {
        userID: {
            type: String,
            trim: true,
            required: true,
            sparse: true,
        },
        FirstName: {
            type: String,
            required: true,
            trim:true
        },
        LastName: {
            type: String,
            required: true,
            trim:true
        },
        Email: {
            type: String,
            required: true,
            trim:true
        },
        Password: {
            type: String,
            required: true,
            trim:true
        },
        Phone:{
            type: String,
            required:true,
            trim:true
        },
        Gender:{
            type: String,
            enum: ["male" , "female"]
        },
        Image:{
            type:String,
            required:true,
        },
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Userpost' // Refers to the Userpost model for posts made by this user
        }],
        achievements: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Achievement' // Refers to the Achievement model for achievements related to this user's posts
        }]
    },
    {
        timestamps: true,
    }
);

// signup collection
module.exports = mongoose.model("Signup", Signup);

