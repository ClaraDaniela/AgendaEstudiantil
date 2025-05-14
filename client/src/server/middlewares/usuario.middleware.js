import Usuario from './db/models/usuario.js';

const existeUsuarioById = async (req, res, next) => {
    const idUsuario = req.params.id;

    try {
        const usuario = await Usuario.findOne({ where: { usuario: idUsuario } });

        if (!usuario) {
            return res.status(404).json({
                error: `No se encuentra el usuario con el id ${idUsuario}`
            });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar el usuario', detalle: error.message });
    }
};

export default { existeUsuarioById };