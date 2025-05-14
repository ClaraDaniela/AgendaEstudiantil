const getUsuarioById = (req, res) => {
    res.status(200).json(req.usuario);
};

const updateUsuario = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        await req.usuario.update(req.body);
        res.status(200).json({ mensaje: "Usuario actualizado con éxito", usuario: req.usuario });
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ error: "Error al actualizar el usuario", detalle: error.message });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        await req.usuario.destroy();
        res.status(200).json({ mensaje: `El usuario con ID ${req.usuario.idUsuario} fue eliminado con éxito` });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: "Error al eliminar el usuario", detalle: error.message });
    }
};

const createUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        return res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        return res.status(500).json({ error: "Error al crear el usuario", detalle: error.message });
    }
}
module.exports = {
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
    createUsuario
}