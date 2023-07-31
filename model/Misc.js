const mongoose = require('mongoose');

const Miscschema = new mongoose.Schema({
   Miscid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GeneralAchievement', // Refers to the GeneralAchievement model for the general achievement associated with this specific hackathon achievement
        required: true
    }
});

module.exports = mongoose.model("MiscAchievement", Miscschema );