// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { swaggerUi, specs } = require('./swagger');
require('dotenv').config();

const connectDB = require('./config/database');
const equipmentRoutes = require('./routes/equipment');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/equipments', equipmentRoutes);

connectDB().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
});
