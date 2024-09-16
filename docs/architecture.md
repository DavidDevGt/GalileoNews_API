
# Architecture Overview

## 1. Introducción

Este documento describe la arquitectura del backend del proyecto. El sistema está desarrollado en **Node.js** y sigue una arquitectura **MVC (Modelo-Vista-Controlador)** para la organización de sus componentes principales.

## 2. Estructura de Directorios

A continuación se muestra una vista general de la estructura de directorios utilizada en el proyecto:

```bash
.
├── config/         # Archivos de configuración (base de datos, entorno, etc.)
├── docs/           # Documentación
├── index.js        # Punto de entrada principal de la aplicación
├── migrations/     # Scripts de migración de la base de datos
├── models/         # Definición de los modelos de la base de datos (ORM)
├── src/            # Lógica principal del proyecto
│   ├── controllers/    # Controladores que manejan la lógica del negocio
│   ├── models/         # Modelos que definen los esquemas de la base de datos
│   ├── routes/         # Definición de las rutas de la API
│   ├── services/       # Servicios externos o funcionalidades auxiliares
│   └── utils/          # Utilidades y funciones auxiliares
├── test/           # Scripts para pruebas y generación de datos falsos
```

## 3. Componentes Principales

### 3.1. **Punto de entrada (`index.js`)**

El archivo `index.js` es el punto de entrada principal de la aplicación. Inicializa el servidor y carga las rutas.

**Responsabilidades:**
- Configurar el servidor Express.
- Conectar la base de datos.
- Manejar errores globales y el arranque del servidor.

### 3.2. **Configuración (`config/`)**

Contiene los archivos de configuración para la conexión a la base de datos y otras configuraciones del entorno. En este proyecto, el archivo `config.json` se utiliza para definir la configuración de la base de datos, mientras que `db.js` maneja la conexión a la base de datos utilizando **Sequelize**.

**Archivos clave:**
- `config.json`: Configuración de la base de datos (desarrollo, producción, pruebas).
- `db.js`: Configuración e inicialización de Sequelize.
- `schema.sql`: Archivo opcional con el esquema SQL de la base de datos.

### 3.3. **Modelos (`src/models/`)**

Los modelos representan las tablas de la base de datos y definen las relaciones entre ellas. En este proyecto, estamos utilizando **Sequelize** como ORM.

**Responsabilidades:**
- Definir las entidades (tablas) como `Usuario`, `Rol`, `Categoria`, etc.
- Definir las relaciones entre entidades (asociaciones, claves foráneas).

**Relaciones importantes:**
- Los modelos están relacionados mediante el archivo `relations.js`, que define las asociaciones entre ellos (por ejemplo, `Usuario` tiene un `Rol`).

### 3.4. **Controladores (`src/controllers/`)**

Los controladores contienen la lógica de negocio y se encargan de manejar las solicitudes HTTP entrantes, interactuando con los modelos y respondiendo a las peticiones del cliente.

**Responsabilidades:**
- Manejar las solicitudes y respuestas HTTP para cada entidad (por ejemplo, `usuarioController.js`, `categoriaController.js`).
- Invocar los servicios necesarios y manipular los datos antes de enviarlos de vuelta al cliente.

### 3.5. **Rutas (`src/routes/`)**

Las rutas definen los endpoints expuestos por la API. Cada archivo de rutas está asociado con un controlador.

**Ejemplos de rutas:**
- `GET /usuarios`: Obtener la lista de usuarios.
- `POST /usuarios`: Crear un nuevo usuario.

**Archivos clave:**
- `usuarioRoutes.js`, `categoriaRoutes.js`, etc.

### 3.6. **Servicios (`src/services/`)**

Los servicios contienen la lógica que no necesariamente está vinculada a una entidad o controlador específico. Esto incluye servicios externos (APIs de terceros), autenticación, envío de emails, etc.

**Ejemplo:**
- Un servicio para gestionar la autenticación JWT.

### 3.7. **Utilidades (`src/utils/`)**

Funciones reutilizables que pueden ser utilizadas en múltiples partes de la aplicación, como el manejo de fechas o formateo de datos.

## 4. Base de Datos

La base de datos es gestionada utilizando **Sequelize** como ORM. Las migraciones se encuentran en la carpeta `migrations/` y permiten la creación y actualización de las tablas.

**Tablas principales:**
- `Usuario`: Almacena la información de los usuarios.
- `Rol`: Almacena los roles de usuario (admin, usuario normal, etc.).
- `Categoria`, `NoticiaEvento`, `Ingeniero`, `Pensum`: Otras entidades relacionadas con el dominio del proyecto.

**Migraciones:**
Cada archivo en `migrations/` representa una migración que crea o modifica tablas en la base de datos.

## 5. Flujo de Trabajo

### 5.1. Ciclo de vida de una solicitud

1. **Solicitud HTTP**: El cliente realiza una solicitud HTTP a un endpoint de la API.
2. **Router**: La solicitud se redirige a una ruta específica, que invoca el controlador correspondiente.
3. **Controlador**: El controlador procesa la solicitud, interactúa con el modelo o servicio necesario.
4. **Modelo**: El modelo interactúa con la base de datos si es necesario.
5. **Respuesta**: El controlador devuelve una respuesta al cliente con el resultado de la operación.

## 6. Seguridad

La aplicación incluye medidas de seguridad básicas, como la validación de entradas y autenticación con **JWT** para proteger los endpoints privados.

**Características:**
- Autenticación por **JSON Web Token (JWT)**.
