const Ingeniero = require('../models/Ingeniero');

const getEngineers = async (req, res) => {
    try {
        const ingenieros = await Ingeniero.findAll();
        res.json(ingenieros);
    } catch (error) {
        res.status(500).json({ error: "Error al traer todos los ingenieros" });
    }
}

const createEngineer = async (req, res) => {
    const { nombre, email } = req.body;
    try {
        const newIngeniero = await Ingeniero.create({ nombre,email });
        res.status(201).json(newIngeniero);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el ingeniero" });
    }
}

const getEngineerById = async (req, res) => {
    const { id } = req.params;
    try {
        const ingeniero = await Ingeniero.findByPk(id);
        if (ingeniero) {
            res.json(ingeniero);
        } else {
            res.status(404).json({ error: "Ingeniero no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al buscar el ingeniero" });
    }
}

const updateEngineer = async (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    try {
        const ingeniero = await Ingeniero.findByPk(id);
        if (ingeniero) {
            await ingeniero.update({ nombre, email });
            res.json(ingeniero);
        } else {
            res.status(404).json({ error: "Ingeniero no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el ingeniero" });
    }
}

const deleteEngineer = async (req, res) => {
    const { id } = req.params;
    try {
        const ingeniero = await Ingeniero.findByPk(id);
        if (ingeniero) {
            await ingeniero.destroy();
            res.json({ message: "Ingeniero eliminado" });
        } else {
            res.status(404).json({ error: "Ingeniero no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el ingeniero" });
    }
}

module.exports = {
    getEngineers,
    createEngineer,
    getEngineerById,
    updateEngineer,
    deleteEngineer
}