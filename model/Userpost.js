const mongoose=require('mongoose');


const post = new mongoose.Schema(
    {
        checkID: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Signup'
         },
        title:{
            type:String,
            required:true,
            trim:true
        },
        Date:{
            type:Date,
            required:true,
            default:Date.now()
        },
        description:{
            type:String,
            required:true,
        },
        Image:{
            type:String,
            required:true,
        },
        Likes:[
            {

            }
        ],
        acheivementtag:[
            {
                
            }
        ]

    }
)