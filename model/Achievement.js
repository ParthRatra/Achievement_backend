const mongoose = require('mongoose');

const generalAchievementSchema = new mongoose.Schema(
    {
        postID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Userpost', 
            required: true
        },
        types: [{
            type: String,
            enum: ["hackathon", "startup", "academics", "misc"],
            required: true
        }],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("GeneralAchievement", generalAchievementSchema);