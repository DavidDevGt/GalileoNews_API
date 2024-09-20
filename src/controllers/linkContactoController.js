const LinkContacto = require("../models/LinkContacto");

const getLinkContactos = async (req, res) => {
    try {
        const linkContactos = await LinkContacto.findAll();
        res.json(linkContactos);
    } catch (error) {
        res.status(500).json({ error: "Error al traer los linkContactos" });
    }
};

const getLinkContactoById = async (req, res) => {
    try {
        const { id } = req.params;
        const linkContacto = await LinkContacto.findByPk(id);

        if (linkContacto) {
            res.json(linkContacto);
        } else {
            res.status(404).json({ error: "LinkContacto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al traer el linkContacto" });
    }
};

const createLinkContacto = async (req, res) => {
    const { titulo, descripcion, tipo, noticia_evento_id, ingeniero_id, pensum_id } = req.body;

    try {
        const linkContacto = await LinkContacto.create({
            titulo,
            descripcion,
            tipo,
            noticia_evento_id,
            ingeniero_id,
            pensum_id
        });
        res.status(201).json(linkContacto);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el linkContacto" });
    }
};

const updateLinkContacto = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, tipo, noticia_evento_id, ingeniero_id, pensum_id } = req.body;

    try {
        const [updated] = await LinkContacto.update(
            { titulo, descripcion, tipo, noticia_evento_id, ingeniero_id, pensum_id },
            { where: { id } }
        );

        if (updated) {
            const updatedLinkContacto = await LinkContacto.findByPk(id);
            res.json(updatedLinkContacto);
        } else {
            res.status(404).json({ error: "LinkContacto no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar el linkContacto" });
    }
};

const deleteLinkContacto = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await LinkContacto.destroy({ where: { id } });

        if (deleted) {
            res.json({message: "LinkContacto eliminado"});
        } else {
            res.status(404).json({ error: "LinkContacto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el linkContacto" });
    }
};

module.exports = {
    getLinkContactos,
    getLinkContactoById,
    createLinkContacto,
    updateLinkContacto,
    deleteLinkContacto
};
