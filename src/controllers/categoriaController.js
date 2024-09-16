const Categoria = require("../models/Categoria");

const getCategories = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: "Error al traer las categorias" });
  }
};

const createCategory = async (req, res) => {
  const { nombre } = req.body;
  try {
    const newCategory = await Categoria.create({ nombre });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Error al crear una categoria" });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ error: "Categoria no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar categoria" });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      await categoria.update({ nombre });
      res.json(categoria);
    } else {
      res.status(404).json({ error: "Categoria no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar categoria" });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      await categoria.destroy();
      res.json({ message: "Categoria eliminada" });
    } else {
      res.status(404).json({ error: "Categoria no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar categoria" });
  }
};

module.exports = {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
