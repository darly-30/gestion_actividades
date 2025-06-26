import Joi from 'joi';

export const createActivitySchema = Joi.object({
  title: Joi.string().min(3).max(255).required().messages({
    'string.base': 'El título debe ser una cadena de texto.',
    'string.min': 'El título debe tener al menos 3 caracteres.',
    'any.required': 'El título es obligatorio.',
  }),
  description: Joi.string().min(5).max(1000).required().messages({
    'string.base': 'La descripción debe ser una cadena de texto.',
    'string.min': 'La descripción debe tener al menos 3 caracteres.',
    'any.required': 'La descripción es obligatoria.',
  }),
  state: Joi.boolean().required().messages({
    'boolean.base': 'El estado debe ser un valor booleano (verdadero/falso).',
    'any.required': 'El estado es obligatorio.',
  }),
  
});

export const updateActivitySchema = Joi.object({
  title: Joi.string().min(3).max(255).optional().messages({
   'string.base': 'El título debe ser una cadena de texto.',
    'string.min': 'El título debe tener al menos 3 caracteres.',
    }),
  description: Joi.string().min(5).max(1000).optional().messages({
    'string.base': 'La descripción debe ser una cadena de texto.',
    'string.min': 'La descripción debe tener al menos 3 caracteres.',
  }),
  state: Joi.boolean().optional().messages({
    'boolean.base': 'El estado debe ser un valor booleano (verdadero/falso).',
  }),
  id: Joi.number().integer().positive().required().messages({
    'number.base': 'El ID de usuario debe ser un número.',
    'any.required': 'El ID de usuario es obligatorio.',
  }),
}).min(1).messages({
  'object.min': 'Debe proporcionar al menos un campo para actualizar (título, descripción o estado).',
});

export const deleteActivitySchema = Joi.object({
  id: Joi.number().integer().positive().required().messages({
    'number.base': 'El ID de la actividad debe ser un número.',
    'any.required': 'El ID de la actividad es obligatorio.',
  }),
});

export const getActivitiesByUserIdSchema = Joi.object({
  from: Joi.date().iso().messages({
      'date.base': 'La fecha "from" debe ser una fecha válida.',
      'date.format': 'La fecha "from" debe tener el formato ISO (YYYY-MM-DD).'
    }),

  to: Joi.date().iso().messages({
      'date.base': 'La fecha "to" debe ser una fecha válida.',
      'date.format': 'La fecha "to" debe tener el formato ISO (YYYY-MM-DD).'
    }),

    page: Joi.number().integer().min(1).default(1).messages({
      'number.base': 'El número de página debe ser un número.',
      'number.integer': 'El número de página debe ser un número entero.',
      'number.min': 'La página debe ser al menos 1.',
    }),

    limit: Joi.number().integer().min(1).default(10).messages({
      'number.base': 'El límite debe ser un número.',
      'number.integer': 'El límite debe ser un número entero.',
      'number.min': 'El límite debe ser al menos 1.',
    }),
    title: Joi.string().min(3).max(255).messages({
      'string.base': 'El título debe ser una cadena de texto.',
      'string.min': 'El título debe tener al menos 3 caracteres.',
    }),
    state: Joi.boolean().messages({
      'boolean.base': 'El estado debe ser un valor booleano (verdadero/falso).',
    }),
  });