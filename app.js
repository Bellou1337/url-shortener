require("dotenv").config();
const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const urlRouter = require("./src/routes/shortenURL");
const connectDB = require("./src/config/database");

const app = express();

app.use(express.json());
app.use("/api", urlRouter);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "URL Shortener API",
      version: "0.0.1",
      description: "API для сокращения ссылок",
    },
    servers: [
      {
        url: process.env.URL,
      },
    ],
    
  },
  apis: ["./src/schemas/schemas.js"],
};

const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const start = async () => {
  await connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Сервер запущен на порту ${process.env.PORT}`);
  });
};

start();
