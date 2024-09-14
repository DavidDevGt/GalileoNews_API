# GalileoNews_API

Este proyecto es una API REST desarrollada para el manejo de noticias y eventos de la Universidad Galileo. Está construida con **Node.js** y utiliza **MySQL**.

## Configuración inicial

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** en tu sistema.
- **MySQL** o acceso a una instancia de MySQL. Puedes usar **XAMPP**, **WAMP**, o **MAMP** en Windows/macOS para ejecutar MySQL localmente.

### Clonar el repositorio

Para obtener una copia del proyecto en tu máquina local, clona el repositorio usando **Git**:

```bash
git clone https://github.com/DavidDevGt/GalileoNews_API.git
cd GalileoNews_API
```

### Instalar dependencias

Instala las dependencias del proyecto ejecutando:

```bash
npm install
```

### Inicializar Sequelize

Si no lo has hecho antes, inicializa Sequelize para generar las carpetas necesarias:

```bash
npx sequelize-cli init
```

### Configurar Sequelize

Antes de continuar, asegúrate de configurar la conexión a tu base de datos MySQL en el archivo `config/config.json`. Este archivo ya está generado por **Sequelize** y puedes editarlo para asegurarte de que las credenciales de tu base de datos sean correctas.

### Configurar variables de entorno

Copia el archivo `.env.example` a `.env` y completa las variables de entorno según tu configuración local:

```bash
cp .env.example .env
```

### Ejecutar migraciones

Asegúrate de que MySQL esté corriendo y que tu base de datos esté creada. Luego, ejecuta las migraciones para crear las tablas en la base de datos:

```bash
npx sequelize-cli db:migrate
```

### Ejecutar el servidor

Para iniciar el servidor en modo de desarrollo, ejecuta:

```bash
npm run dev
```

### Revertir migraciones (opcional)

Si necesitas deshacer la última migración aplicada, ejecuta:

```bash
npx sequelize-cli db:migrate:undo
```

Para deshacer todas las migraciones:

```bash
npx sequelize-cli db:migrate:undo:all
```
