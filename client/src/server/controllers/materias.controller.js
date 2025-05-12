const getMaterias = (req, res) => {
    res.status(200).json({mensaje: "hola desde get materias"})
};

const getMateriaById = (req, res) => {
    res.status(200).json({mensaje: `recibi el id ${req.params.id}`})
};

module.exports = { getMaterias, getMateriaById };