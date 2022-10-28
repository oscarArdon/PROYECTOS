CREATE DATABASE DBCONTACTO
USE DBCONTACTO

CREATE TABLE CONTACTO(
IdContacto int identity,
Nombres varchar(100),
Apellidos varchar(100),
Telefono varchar(100),
Correo varchar(100)
)

insert into CONTACTO values 
('Jose','Perez','2222-3333','joseperez@gmail.com'),
('Andrea','Perez','2222-3333','andreaperez@gmail.com'),
('William','Perez','2222-3333','willperez@gmail.com'),
('Oscar','Perez','2222-3333','oscarperez@gmail.com')

select * from CONTACTO

create procedure sp_Registrar(
@Nombres varchar(100), 
@Apellidos varchar(100), 
@Telefono varchar(100), 
@Correo varchar(100)
)
as begin
	insert into CONTACTO values(@Nombres,@Apellidos,@Telefono,@Correo)
end

create procedure sp_Editar(
@IdContacto int, 
@Nombres varchar(100), 
@Apellidos varchar(100), 
@Telefono varchar(100), 
@Correo varchar(100)
)
as begin
update CONTACTO set Nombres = @Nombres, Apellidos = @Apellidos,Telefono = @Telefono, Correo = @Correo 
where IdContacto = @IdContacto
end

create procedure sp_Eliminar(
@IdContacto int
)
as begin
delete from CONTACTO where IdContacto = @IdContacto
end



segunda solicitud
https://sintec.kodevar.dev/requests/special/169


