// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Fitness Tools API',
            version: '0.0.1',
            description: 'API documentation for Fitness Project',
        },
    },
    apis: ['./routes/*.js', './controllers/*.js'], // Rutas de tus archivos de API
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
