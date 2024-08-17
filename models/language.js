// models/language.js
const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        maxlength: 2,
    },
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    active: {
        type: Boolean,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now,
        immutable: true,
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

// Middleware para actualizar `updated_at` antes de guardar
languageSchema.pre('save', function (next) {
    if (!this.isNew) {
        this.updated_at = Date.now();
    }
    next();
});

// Middleware para actualizar `updated_at` antes de realizar una actualización
languageSchema.pre('findOneAndUpdate', function (next) {
    this._update.updated_at = Date.now();
    next();
});

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;
