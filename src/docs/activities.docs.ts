/****
 * @swagger
 * tags:
 *   name: Activities
 *   description: Endpoints relacionados con la gestión de actividades
 */

/**
 * @swagger
 * /activities/create:
 *   post:
 *     summary: Crear una nueva actividad
 *     tags: [Activities]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - state
 *             properties:
 *               title:
 *                 type: string
 *                 example: Hacer ejercicio
 *               description:
 *                 type: string
 *                 example: Ir al gimnasio por la mañana
 *               state:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Actividad creada exitosamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /activities/update:
 *   put:
 *     summary: Actualizar una actividad existente
 *     tags: [Activities]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               title:
 *                 type: string
 *                 example: Hacer ejercicio actualizado
 *               description:
 *                 type: string
 *                 example: Nueva descripción
 *               state:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Actividad actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /activities/delete:
 *   delete:
 *     summary: Eliminar una actividad
 *     tags: [Activities]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Actividad eliminada exitosamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /activities/getByUserId:
 *   post:
 *     summary: Obtener actividades por usuario y filtros
 *     tags: [Activities]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               from:
 *                 type: string
 *                 format: date
 *                 example: 2024-06-01
 *               to:
 *                 type: string
 *                 format: date
 *                 example: 2024-06-30
 *               page:
 *                 type: integer
 *                 example: 1
 *               limit:
 *                 type: integer
 *                 example: 10
 *               title:
 *                 type: string
 *                 example: Hacer ejercicio
 *               state:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Lista de actividades del usuario
 *       400:
 *         description: Datos inválidos
 */