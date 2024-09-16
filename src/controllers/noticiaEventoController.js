const NoticiaEvento = require("../models/NoticiaEvento");

const getNoticiaEventos = async (req, res) => {
  try {
    const noticiaEventos = await NoticiaEvento.findAll();
    res.json(noticiaEventos);
  } catch (error) {
    res.status(500).json({ error: "Error al traer todos los eventos" });
  }
};

const createNoticiaEvento = async (req, res) => {
  const { titulo, descripcion, fecha, categoria_id } = req.body;
  try {
    const newNoticiaEvento = await NoticiaEvento.create({ titulo, descripcion, fecha, categoria_id });
    res.status(201).json(newNoticiaEvento);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el evento" });
  }
};

const getNoticiaEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    const noticiaEvento = await NoticiaEvento.findByPk(id);
    if (noticiaEvento) {
      res.json(noticiaEvento);
    } else {
      res.status(404).json({ error: "Evento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar el evento" });
  }
};

const updateNoticiaEvento = async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, fecha, categoria_id } = req.body;
  try {
    const noticiaEvento = await NoticiaEvento.findByPk(id);
    if (noticiaEvento) {
      await noticiaEvento.update({ titulo, descripcion, fecha, categoria_id });
      res.json(noticiaEvento);
    } else {
      res.status(404).json({ error: "Evento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el evento" });
  }
};

const deleteNoticiaEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const noticiaEvento = await NoticiaEvento.findByPk(id);
    if (noticiaEvento) {
      await noticiaEvento.destroy();
      res.json({ message: "Evento eliminado" });
    } else {
      res.status(404).json({ error: "Evento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el evento" });
  }
};

module.exports = {
  getNoticiaEventos,
  createNoticiaEvento,
  getNoticiaEventoById,
  updateNoticiaEvento,
  deleteNoticiaEvento
};
