// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { swaggerUi, specs } = require('./swagger');
require('dotenv').config();

const connectDB = require('./config/database');
const morgan = require('morgan');
const languageRoutes = require('./routes/language');
const equipmentRoutes = require('./routes/equipment');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/languages', languageRoutes);
app.use('/api/equipments', equipmentRoutes);

connectDB().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });

});