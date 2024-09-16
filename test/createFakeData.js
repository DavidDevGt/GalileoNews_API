const { faker } = require("@faker-js/faker");
const { sequelize } = require("../config/db");
const {
  Usuario,
  Rol,
  Categoria,
  NoticiaEvento,
  Ingeniero,
  LinkContacto,
  Pensum,
} = require("../src/models/relations");

const createData = async () => {
  try {
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await sequelize.sync({ force: true });

    const roles = await Rol.bulkCreate(
      [
        { nombre: "Admin", descripcion: "Administrador del sistema" },
        { nombre: "Usuario", descripcion: "Usuario común" },
      ],
      { returning: true }
    );

    console.log("Roles creados.");

    const usuarios = [];
    for (let i = 0; i < 10; i++) {
      usuarios.push({
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        rol_id: roles[Math.floor(Math.random() * roles.length)].id,
      });
    }
    await Usuario.bulkCreate(usuarios);
    console.log("Usuarios creados.");

    const categorias = [];
    for (let i = 0; i < 5; i++) {
      categorias.push({ nombre: faker.commerce.department() });
    }
    await Categoria.bulkCreate(categorias);
    console.log("Categorías creadas.");

    const ingenieros = [];
    for (let i = 0; i < 10; i++) {
      ingenieros.push({
        nombre: faker.person.fullName(),
        email: faker.internet.email(),
      });
    }
    await Ingeniero.bulkCreate(ingenieros);
    console.log("Ingenieros creados.");

    const pensums = [];
    for (let i = 0; i < 3; i++) {
      pensums.push({
        titulo: `Pensum ${faker.lorem.words()}`,
        descripcion: faker.lorem.sentence(),
        url_documento: faker.internet.url(),
      });
    }
    await Pensum.bulkCreate(pensums);
    console.log("Pensums creados.");

    const noticiasEventos = [];
    for (let i = 0; i < 15; i++) {
      const categoria =
        categorias[Math.floor(Math.random() * categorias.length)];
      if (!categoria) throw new Error("No hay categorías disponibles.");

      noticiasEventos.push({
        titulo: faker.lorem.words(3),
        descripcion: faker.lorem.paragraph(),
        fecha: faker.date.past(),
        categoria_id: categoria.id,
      });
    }
    await NoticiaEvento.bulkCreate(noticiasEventos);
    console.log("Noticias creadas.");

    const linksContactos = [];
    for (let i = 0; i < 20; i++) {
      linksContactos.push({
        titulo: faker.lorem.sentence(),
        descripcion: faker.lorem.paragraph(),
        tipo: faker.lorem.words(),
        noticia_evento_id:
          noticiasEventos[Math.floor(Math.random() * noticiasEventos.length)]
            .id,
        ingeniero_id:
          ingenieros[Math.floor(Math.random() * ingenieros.length)].id,
        pensum_id: pensums[Math.floor(Math.random() * pensums.length)].id,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      });
    }
    await LinkContacto.bulkCreate(linksContactos);
    console.log("Links de contacto creados.");

    console.log("Datos fake ingresados en la base de datos.");
  } catch (error) {
    console.error("Error al insertar datos:", error);
  } finally {
    await sequelize.close();
  }
};

createData();
