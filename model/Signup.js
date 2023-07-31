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
        }

    },
    {
        timestamps: true,
      }
);

module.exports = mongoose.model("Signup", Signup);
// signup model
