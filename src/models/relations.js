const Usuario = require('./Usuario');
const Rol = require('./Rol');
const NoticiaEvento = require('./NoticiaEvento');
const Categoria = require('./Categoria');
const LinkContacto = require('./LinkContacto');
const Pensum = require('./Pensum');
const Ingeniero = require('./Ingeniero');

Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });
Rol.hasMany(Usuario, { foreignKey: 'rol_id' });

NoticiaEvento.belongsTo(Categoria, { foreignKey: 'categoria_id' });
Categoria.hasMany(NoticiaEvento, { foreignKey: 'categoria_id' });

NoticiaEvento.hasMany(LinkContacto, { foreignKey: 'noticia_evento_id' });
LinkContacto.belongsTo(NoticiaEvento, { foreignKey: 'noticia_evento_id' });

Ingeniero.hasMany(LinkContacto, { foreignKey: 'ingeniero_id' });
LinkContacto.belongsTo(Ingeniero, { foreignKey: 'ingeniero_id' });

Pensum.hasMany(LinkContacto, { foreignKey: 'pensum_id' });
LinkContacto.belongsTo(Pensum, { foreignKey: 'pensum_id' });