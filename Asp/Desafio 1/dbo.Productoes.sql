CREATE TABLE [dbo].[Productoes] (
    [ID]          INT            IDENTITY (1, 1) NOT NULL,
    [IdProducto]  VARCHAR(7) NOT NULL,
    [Descripcion] NVARCHAR (MAX) NULL,
    [Categoria]   NVARCHAR (MAX) NULL,
    [Costo]       DECIMAL(10, 2)     NOT NULL,
    [PrecioVenta] DECIMAL(10, 2)     NOT NULL,
    [Existencia]  INT            NOT NULL,
    [NumPedidos]  INT            NOT NULL,
    CONSTRAINT [PK_dbo.Productoes] PRIMARY KEY CLUSTERED ([ID] ASC) 
);

