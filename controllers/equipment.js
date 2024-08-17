// controllers/equipment.js
const Equipment = require('../models/equipment');
const { validationResult } = require('express-validator');

const sendResponse = (res, statusCode, message, data = null) => {
    res.status(statusCode).json({
        status: statusCode < 400 ? 'success' : 'error',
        message,
        data,
    });
};

const getEquipments = async (req, res) => {
    try {
        const equipments = await Equipment.find();
        sendResponse(res, 200, 'Equipments retrieved successfully', equipments);
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

const getEquipmentById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return sendResponse(res, 400, 'Invalid ID format');
        }

        const equipment = await Equipment.findById(id);
        if (equipment) {
            sendResponse(res, 200, 'Equipment retrieved successfully', equipment);
        } else {
            sendResponse(res, 404, 'Equipment not found');
        }
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

const createEquipment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return sendResponse(res, 400, 'Validation errors', errors.array());
        }

        const equipment = new Equipment(req.body);
        await equipment.save();
        sendResponse(res, 201, 'Equipment created successfully', equipment);
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

const updateEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return sendResponse(res, 400, 'Invalid ID format');
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return sendResponse(res, 400, 'Validation errors', errors.array());
        }

        const equipment = await Equipment.findByIdAndUpdate(id, req.body, { new: true });
        if (equipment) {
            sendResponse(res, 200, 'Equipment updated successfully', equipment);
        } else {
            sendResponse(res, 404, 'Equipment not found');
        }
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

const deleteEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return sendResponse(res, 400, 'Invalid ID format');
        }

        const deleted = await Equipment.findByIdAndDelete(id);
        if (deleted) {
            sendResponse(res, 204, 'Equipment deleted successfully');
        } else {
            sendResponse(res, 404, 'Equipment not found');
        }
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

module.exports = {
    getEquipments,
    getEquipmentById,
    createEquipment,
    updateEquipment,
    deleteEquipment,
};
