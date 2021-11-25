create database persona;
create table personas (
ID INT PRIMARY KEY IDENTITY (1, 1),
 DUI VARCHAR(10),
 Nombre VARCHAR(50),
 Apellido VARCHAR(50),
 FechaNacimiento DATETIME,
 Direccion VARCHAR(100),
 Correo VARCHAR(50));