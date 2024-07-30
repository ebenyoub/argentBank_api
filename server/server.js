import express, { json, urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';  // Utilisation de js-yaml
import dbConnection from './database/connection.js';
import userRoutes from './routes/userRoutes.js';  // Remplacement de require par import

// Charger le fichier YAML
// const swaggerFilePath = path.resolve("../swagger.yaml");
const swaggerDocs = yaml.load("../swagger.yaml");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the database
dbConnection();

// Handle CORS issues
app.use(cors());

// Request payload middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Handle custom routes
app.use('/api/v1/user', userRoutes);  // Remplacement de require par import

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', serve, setup(swaggerDocs));
}

app.get('/', (req, res) => {
  res.send('Hello from my Express server v2!');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
