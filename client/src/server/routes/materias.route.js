const { Router } = require('express');
const router = Router();
const { getMaterias, getMateriaById } = require("../controllers")["materiasController"];

router.get("/materias", getMaterias);
router.get("/:id", getMateriaById);

module.exports = router;
