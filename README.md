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

Una vez clonado el repositorio, instala las dependencias del proyecto ejecutando:

```bash
npm install
```

### Configurar variables de entorno

Copia el archivo `.env.example` a un nuevo archivo llamado `.env` y completa las variables de entorno con los valores correspondientes a tu entorno de desarrollo:

```bash
cp .env.example .env
```

### Ejecutar migraciones

Para configurar tu base de datos con las tablas correctas, necesitas ejecutar las **migraciones** con **Sequelize**. Las migraciones crean las tablas en la base de datos según el esquema que está definido en el código.

Primero, asegúrate de que MySQL esté corriendo y que la base de datos definida en tu archivo `.env` exista (si no, crea una nueva base de datos).

Luego ejecuta:

```bash
npx sequelize-cli db:migrate
```

Este comando creará todas las tablas necesarias en la base de datos.

### Ejecutar el servidor

Para iniciar el servidor en modo de desarrollo, puedes usar:

```bash
npm run dev
```

### Revertir migraciones (opcional)

Si necesitas deshacer la última migración aplicada, puedes ejecutar:

```bash
npx sequelize-cli db:migrate:undo
```

Para deshacer todas las migraciones, ejecuta:

```bash
npx sequelize-cli db:migrate:undo:all
```
