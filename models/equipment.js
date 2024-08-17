// models/equipment.js
const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
    language_code: {
        type: String,
        required: true,
        maxlength: 2,
    },
    name: {
        type: String,
        required: true,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        maxlength: 255,
    },
    long_description: {
        type: String,
        maxlength: 1000,
    }
});

const equipmentSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50,
    },
    image_urls: [{
        type: String,
        maxlength: 255,
    }],
    active: {
        type: Boolean,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    translations: [translationSchema],
});

equipmentSchema.pre('save', function (next) {
    if (!this.isNew) {
        this.updated_at = Date.now();
    }
    next();
});

equipmentSchema.pre('findOneAndUpdate', function (next) {
    this._update.updated_at = Date.now();
    next();
});


const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
