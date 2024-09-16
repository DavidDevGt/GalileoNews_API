CREATE DATABASE IF NOT EXISTS GalileoNewsDB;
USE GalileoNewsDB;

CREATE TABLE Rol (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT
);

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol_id INT NOT NULL,
    FOREIGN KEY (rol_id) REFERENCES Rol(id) ON DELETE CASCADE
);

CREATE TABLE Categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE NoticiaEvento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATE NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id) ON DELETE CASCADE
);

CREATE TABLE Ingeniero (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE Pensum (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    url_documento VARCHAR(255) NOT NULL
);

CREATE TABLE LinkContacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    noticia_evento_id INT NOT NULL,
    ingeniero_id INT,
    pensum_id INT,
    FOREIGN KEY (noticia_evento_id) REFERENCES NoticiaEvento(id) ON DELETE CASCADE,
    FOREIGN KEY (ingeniero_id) REFERENCES Ingeniero(id) ON DELETE SET NULL,
    FOREIGN KEY (pensum_id) REFERENCES Pensum(id) ON DELETE SET NULL
);
