# GalileoNews_API

Este proyecto es una API REST desarrollada para el manejo de noticias y eventos de la Universidad Galileo. Está construida con Node.js y utiliza MySQL como sistema de base de datos a través de Sequelize ORM.

## Configuración inicial

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. También necesitarás acceso a una instancia de MySQL, puedes usar XAMP o WAMP en windows para esto.

### Clonar el repositorio

Para obtener una copia del proyecto en tu máquina, clona el repositorio usando Git:

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

### Ejecutar el servidor

Para iniciar el servidor en modo de desarrollo, puedes usar:

```bash
npm run dev
```

Este comando utilizará `nodemon` para ejecutar tu aplicación y reiniciar automáticamente el servidor cada vez que realices un cambio en el código fuente.
