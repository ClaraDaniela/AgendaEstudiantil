const Joi = require('joi');

const usuarioSchema = Joi.object({
  nombre: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.base': 'El nombre debe ser una cadena de caracteres.',
      'string.empty': 'El nombre no puede estar vacío.',
      'string.min': 'El nombre debe tener al menos 3 caracteres.',
      'string.max': 'El nombre no puede exceder los 50 caracteres.',
      'any.required': 'El nombre es obligatorio.',
    }),

  apellido: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.base': 'El apellido debe ser una cadena de caracteres.',
      'string.empty': 'El apellido no puede estar vacío.',
      'string.min': 'El apellido debe tener al menos 3 caracteres.',
      'string.max': 'El apellido no puede exceder los 50 caracteres.',
      'any.required': 'El apellido es obligatorio.',
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'El email debe ser una cadena de caracteres.',
      'string.empty': 'El email no puede estar vacío.',
      'string.email': 'El email no es válido.',
      'any.required': 'El email es obligatorio.',
    }),

  password: Joi.string()
    .min(6)
    .max(100)
    .required()
    .messages({
      'string.base': 'La contraseña debe ser una cadena de caracteres.',
      'string.empty': 'La contraseña no puede estar vacía.',
      'string.min': 'La contraseña debe tener al menos 6 caracteres.',
      'string.max': 'La contraseña no puede exceder los 100 caracteres.',
      'any.required': 'La contraseña es obligatoria.',
    })
});

module.exports = usuarioSchema;
