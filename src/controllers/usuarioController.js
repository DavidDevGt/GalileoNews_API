const Usuario = require('../models/Usuario');

const getUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

const createUser = async (req, res) => {
    const { email, username, password, rol_id } = req.body;
    try {
        const newUsuario = await Usuario.create({ email, username, password, rol_id });
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, username, password, rol_id } = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            await usuario.update({ email, username, password, rol_id });
            res.json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            await usuario.destroy();
            res.json({ message: 'Usuario eliminado' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
