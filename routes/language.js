// routes/language.js
const express = require('express');
const { getLanguages, getLanguageById, createLanguage, updateLanguage, deleteLanguage } = require('../controllers/language');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Languages
 *   description: Operations related to languages
 */

/**
 * @swagger
 * /api/languages:
 *   get:
 *     summary: Get all languages
 *     tags: [Languages]
 *     responses:
 *       200:
 *         description: List of languages
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
 *                   example: Languages retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Language'
 *       500:
 *         description: Server error
 */
router.get('/', getLanguages);

/**
 * @swagger
 * /api/languages/{id}:
 *   get:
 *     summary: Get language by ID
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Language ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Language details
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
 *                   example: Language retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/Language'
 *       400:
 *         description: Invalid ID format
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getLanguageById);

/**
 * @swagger
 * /api/languages:
 *   post:
 *     summary: Create new language
 *     tags: [Languages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LanguageInput'
 *     responses:
 *       201:
 *         description: Language created successfully
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
 *                   example: Language created successfully
 *                 data:
 *                   $ref: '#/components/schemas/Language'
 *       400:
 *         description: Validation errors
 *       500:
 *         description: Server error
 */
router.post('/', createLanguage);

/**
 * @swagger
 * /api/languages/{id}:
 *   put:
 *     summary: Update language by ID
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Language ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LanguageInput'
 *     responses:
 *       200:
 *         description: Language updated successfully
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
 *                   example: Language updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/Language'
 *       400:
 *         description: Invalid ID format or validation errors
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateLanguage);

/**
 * @swagger
 * /api/languages/{id}:
 *   delete:
 *     summary: Delete language by ID
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Language ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Language deleted successfully
 *       400:
 *         description: Invalid ID format
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteLanguage);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Language:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 60b8d295f2d0e40c0d8b4567
 *         code:
 *           type: string
 *           example: en
 *         name:
 *           type: string
 *           example: English
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
 *     LanguageInput:
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *           example: en
 *         name:
 *           type: string
 *           example: English
 *         active:
 *           type: boolean
 *           example: true
 */
