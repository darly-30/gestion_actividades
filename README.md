# 📘 API REST con Node.js, Express y TypeORM

API REST construida con Node.js, Express y TypeORM, con autenticación de usuarios, validación con Joi y estructura profesional en TypeScript. Conexión a base de datos PostgreSQL.

---

## Características

- Autenticación de usuarios (`/auth/register`, `/auth/login`)
-  API REST con Express y TypeORM
-  Validación de entrada con Joi (`validateBody`)
-  Base de datos PostgreSQL
-  Paginación y filtros en endpoints
-  Desarrollado con TypeScript
-  Estructura organizada por capas

---

##  Estructura del Proyecto

```
src/
├── config/         # Configuración de la base de datos y entorno
├── controllers/    # Controladores para manejar la lógica de rutas
├── docs/           # Documentación (Swagger, Postman, etc.)
├── entities/       # Entidades de TypeORM
├── middlewares/    # Middlewares (validación, manejo de errores, auth)
├── routes/         # Definición de rutas agrupadas por módulo
├── schemas/        # Esquemas de validación Joi
├── utils/          # Funciones auxiliares
└── app.ts          # Archivo principal que monta el servidor Express
```

---

##  Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/tu-proyecto.git
cd tu-proyecto
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

```bash
cp .env.example .env
```

Luego edita el archivo `.env` con los valores correspondientes a tu entorno.

---

##  Ejemplo de `.env`

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=12345678
DB_NAME=gestion

JWT_SECRET=clave_ultra_secreta
```

---

## ▶️Scripts disponibles

| Comando         | Descripción                                      |
|----------------|--------------------------------------------------|
| `npm run dev`   | Inicia el servidor en modo desarrollo con nodemon |

---

##  Endpoints principales

### Autenticación (`/auth`)
| Método | Ruta            | Descripción                        |
|--------|-----------------|------------------------------------|
| POST   | `/auth/register`| Registro de nuevo usuario          |
| POST   | `/auth/login`   | Inicio de sesión del usuario       |

### Actividades (`/activities`) 🛡️ Requiere autenticación con JWT
| Método | Ruta                      | Descripción                                     |
|--------|---------------------------|-------------------------------------------------|
| POST   | `/activities/create`      | Crear una nueva actividad                      |
| PUT    | `/activities/update`      | Actualizar una actividad existente             |
| DELETE | `/activities/delete`      | Eliminar una actividad                         |
| POST   | `/activities/getByUserId` | Obtener actividades filtradas por `userId`     |

---

##  Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Joi](https://joi.dev/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

---

## Estado del Proyecto

En desarrollo. Se aceptan mejoras, correcciones y feedback.
