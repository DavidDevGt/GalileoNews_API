const Pensum = require("../models/Pensum");

const getPensums = async (req, res) => {
  try {
    const pensums = await Pensum.findAll();
    res.json(pensums);
  } catch (error) {
    res.status(500).json({ error: "Error al traer todos los pensums" });
  }
};

const createPensum = async (req, res) => {
  const { titulo, descripcion, url_documento } = req.body;
  try {
    const newPensum = await Pensum.create({ titulo, descripcion, url_documento });
    res.status(201).json(newPensum);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el pensum" });
  }
};

const getPensumById = async (req, res) => {
  const { id } = req.params;
  try {
    const pensum = await Pensum.findByPk(id);
    if (pensum) {
      res.json(pensum);
    } else {
      res.status(404).json({ error: "Pensum no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar el pensum" });
  }
};

const updatePensum = async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, url_documento } = req.body;
  try {
    const pensum = await Pensum.findByPk(id);
    if (pensum) {
      await pensum.update({ titulo, descripcion, url_documento });
      res.json(pensum);
    } else {
      res.status(404).json({ error: "Pensum no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el pensum" });
  }
};

const deletePensum = async (req, res) => {
  const { id } = req.params;
  try {
    const pensum = await Pensum.findByPk(id);
    if (pensum) {
      await pensum.destroy();
      res.json({ message: "Pensum eliminado" });
    } else {
      res.status(404).json({ error: "Pensum no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el pensum" });
  }
};

module.exports = {
  getPensums,
  createPensum,
  getPensumById,
  updatePensum,
  deletePensum
};
