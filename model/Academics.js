const mongoose = require('mongoose');

const AcademicsSchema = new mongoose.Schema({
    generalAchievement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GeneralAchievement', // Refers to the GeneralAchievement model for the general achievement associated with this specific hackathon achievement
        required: true
    }
});

module.exports = mongoose.model("AcademicsAchievement", AcademicsSchema);