const mongoose = require('mongoose');

const competitorSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    age: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    team: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.String,
        required: true,
    }
});

const Competitor = mongoose.model('Competitor', competitorSchema);
module.exports = Competitor;