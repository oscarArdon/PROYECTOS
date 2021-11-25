using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//para poder usar Entity Framw
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace MvcPelicula.Models
{
    /*
    Usaremos la clase Película para representar películas en una base de datos. Cada instancia de un
    objeto Película corresponderá a una fila dentro de una tabla de base de datos, y cada propiedad de
    la clase Película se asignará a una columna en la tabla 
    */
    public class Pelicula
    {
        //atributos del modelo
        public int ID { get; set; }
        public string Titulo { get; set; }
        [Display(Name = "Fecha de Lanzamiento")]//muestra "Fecha de lanzamiento" en lugar de "FechaLanzamiento" (por defecto)
        [DataType(DataType.Date)]//Especificando el tipo de dato    
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}",ApplyFormatInEditMode = true)]
        public DateTime FechaLanzamiento { get; set; }
        public string Genero { get; set; }
        public decimal Precio { get; set; }
    }

    /*La clase PeliculaDBContext representa el contexto de la base de datos de películas de Entity
    Framework  que maneja la obtención, el almacenamiento y la actualización de instancias de clase
    Película en una base de datos*/
    public class PeliculaDBContext : DbContext
    {
        public DbSet<Pelicula> Peliculas { get; set; }
    }
}