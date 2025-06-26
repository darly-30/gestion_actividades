import swaggerJSDoc from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Prueba tecnica - Backend",
      version: "1.0.0",
      description: "Api REST para la gestión de actividades",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["src/routes/**/*.ts", "src/docs/**/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);