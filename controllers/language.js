// controllers/language.js
const Language = require('../models/language');
const { validationResult } = require('express-validator');

const sendResponse = (res, statusCode, message, data = null) => {
    res.status(statusCode).json({
        status: statusCode < 400 ? 'success' : 'error',
        message,
        data,
    });
};

const getLanguages = async (req, res) => {
    try {
        const languages = await Language.find();
        sendResponse(res, 200, 'Languages retrieved successfully', languages);
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

const getLanguageById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return sendResponse(res, 400, 'Invalid ID format');
        }

        const languages = await Language.findById(id);
        if (languages) {
            sendResponse(res, 200, 'Languages retrieved successfully', languages);
        } else {
            sendResponse(res, 404, 'Languages not found');
        }
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

const createLanguage = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return sendResponse(res, 400, 'Validation errors', errors.array());
        }

        const language = new Language(req.body);
        await language.save();
        sendResponse(res, 201, 'Equipment created successfully', language);
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return sendResponse(res, 400, 'Invalid ID format');
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return sendResponse(res, 400, 'Validation errors', errors.array());
        }

        const language = await Language.findByIdAndUpdate(id, req.body, { new: true });
        if (language) {
            sendResponse(res, 200, 'Language updated successfully', language);
        } else {
            sendResponse(res, 404, 'Language not found');
        }
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return sendResponse(res, 400, 'Invalid ID format');
        }

        const deleted = await Language.findByIdAndDelete(id);
        if (deleted) {
            sendResponse(res, 204, 'Language deleted successfully');
        } else {
            sendResponse(res, 404, 'Language not found');
        }
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

module.exports = {
    getLanguages,
    getLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage,
};
