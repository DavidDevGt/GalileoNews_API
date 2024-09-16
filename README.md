# GalileoNews_API

Este proyecto es una API REST desarrollada para el manejo de noticias y eventos de la Universidad Galileo. Está construida con **Node.js** y utiliza **MySQL**.

## Getting Started 🚀

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

### Crear la base de datos

Antes de ejecutar las migraciones, debes crear la base de datos en MySQL. Abre tu cliente MySQL (como **MySQL Workbench** o **phpMyAdmin**) o desde la terminal, y ejecuta el siguiente comando para crear la base de datos:

```sql
CREATE DATABASE IF NOT EXISTS GalileoNewsDB;
```

### Inicializar Sequelize

Si no lo has hecho antes, inicializa Sequelize para generar las carpetas necesarias:

```bash
npx sequelize-cli init
```

### Configurar Sequelize

Asegúrate de configurar la conexión a tu base de datos MySQL en el archivo `config/config.json`. Este archivo ya está generado por **Sequelize** y puedes editarlo para que las credenciales de tu base de datos sean correctas (usuario, contraseña, nombre de la base de datos, host, etc.).

### Configurar variables de entorno

Copia el archivo `.env.example` a `.env` y completa las variables de entorno según tu configuración local:

```bash
cp .env.example .env
```

### Ejecutar migraciones

Una vez que hayas creado la base de datos y configurado Sequelize, ejecuta las migraciones para crear las tablas necesarias en la base de datos:

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

### Llenar la base de datos con datos falsos

Después de ejecutar las migraciones, puedes poblar la base de datos con datos de prueba ejecutando el siguiente comando:

```bash
node test/createFakeData.js
```
