const Rol = require("../models/Rol");

const getRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: "Error al traer todos los roles" });
  }
};

const createRol = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const newRol = await Rol.create({ nombre, descripcion });
    res.status(201).json(newRol);
  } catch (error) {
    res.status(500).json({ error: "Error al crear rol" });
  }
};

const getRolById = async (req, res) => {
  const { id } = req.params;
  try {
    const rol = await Rol.findByPk(id);
    if (rol) {
      res.json(rol);
    } else {
      res.status(404).json({ error: "Rol no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar rol" });
  }
};

const updateRol = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const rol = await Rol.findByPk(id);
    if (rol) {
      await rol.update({ nombre, descripcion });
      res.json(rol);
    } else {
      res.status(404).json({ error: "Rol no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar rol" });
  }
};

const deleteRol = async (req, res) => {
  const { id } = req.params;
  try {
    const rol = await Rol.findByPk(id);
    if (rol) {
      await rol.destroy();
      res.json({ message: "Rol eliminado" });
    } else {
      res.status(404).json({ error: "Rol no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar rol" });
  }
};

module.exports = {
  getRoles,
  createRol,
  getRolById,
  updateRol,
  deleteRol,
};
