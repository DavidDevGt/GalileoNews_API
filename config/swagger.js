// config/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0', // Version of the OpenAPI specification
  info: {
    title: 'Galileo News API', // Title for the API documentation
    version: '0.1.0', // API version
    description: 'API documentation for Galileo News', // Short description of the API
  },
  servers: [
    {
      url: 'http://localhost:3001', // The base URL of your API
      description: 'Development server',
    },
  ],
};

// Options for the Swagger docs
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // Path to your route files where you will write API documentation comments
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
