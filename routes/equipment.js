const express = require('express');
const { getEquipments, getEquipmentById, createEquipment, updateEquipment, deleteEquipment } = require('../controllers/equipment');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Equipments
 *   description: Operations related to equipment
 */

/**
 * @swagger
 * /api/equipments:
 *   get:
 *     summary: Get all equipments
 *     tags: [Equipments]
 *     responses:
 *       200:
 *         description: List of equipments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Equipments retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Equipment'
 *       500:
 *         description: Server error
 */
router.get('/', getEquipments);

/**
 * @swagger
 * /api/equipments/{id}:
 *   get:
 *     summary: Get equipment by ID
 *     tags: [Equipments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Equipment ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Equipment details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Equipment retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/Equipment'
 *       400:
 *         description: Invalid ID format
 *       404:
 *         description: Equipment not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getEquipmentById);

/**
 * @swagger
 * /api/equipments:
 *   post:
 *     summary: Create new equipment
 *     tags: [Equipments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EquipmentInput'
 *     responses:
 *       201:
 *         description: Equipment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Equipment created successfully
 *                 data:
 *                   $ref: '#/components/schemas/Equipment'
 *       400:
 *         description: Validation errors
 *       500:
 *         description: Server error
 */
router.post('/', createEquipment);

/**
 * @swagger
 * /api/equipments/{id}:
 *   put:
 *     summary: Update equipment by ID
 *     tags: [Equipments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Equipment ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EquipmentInput'
 *     responses:
 *       200:
 *         description: Equipment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Equipment updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/Equipment'
 *       400:
 *         description: Invalid ID format or validation errors
 *       404:
 *         description: Equipment not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateEquipment);

/**
 * @swagger
 * /api/equipments/{id}:
 *   delete:
 *     summary: Delete equipment by ID
 *     tags: [Equipments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Equipment ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Equipment deleted successfully
 *       400:
 *         description: Invalid ID format
 *       404:
 *         description: Equipment not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteEquipment);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Equipment:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 60b8d295f2d0e40c0d8b4567
 *         code:
 *           type: string
 *           example: EX123
 *         image_urls:
 *           type: array
 *           items:
 *             type: string
 *           example: ["http://example.com/image1.jpg"]
 *         active:
 *           type: boolean
 *           example: true
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2024-08-16T12:34:56Z"
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: "2024-08-16T12:34:56Z"
 *         translations:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Translation'
 *     Translation:
 *       type: object
 *       properties:
 *         language_code:
 *           type: string
 *           example: en
 *         name:
 *           type: string
 *           example: Treadmill
 *         description:
 *           type: string
 *           example: A machine used for running or walking.
 *         long_description:
 *           type: string
 *           example: The treadmill is a device that allows people to walk or run in place, typically for exercise purposes.
 *     EquipmentInput:
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *           example: EX123
 *         image_urls:
 *           type: array
 *           items:
 *             type: string
 *           example: ["http://example.com/image1.jpg"]
 *         active:
 *           type: boolean
 *           example: true
 *         translations:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Translation'
 */
