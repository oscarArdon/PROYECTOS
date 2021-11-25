using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//para poder usar Entity Framw
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace MvcPersona.Models
{
    public class Persona
    {
        public int ID { get; set; }
        public string DUI { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        [Display(Name = "Fecha de Nacimiento")]//muestra "Fecha de lanzamiento" en lugar de "FechaLanzamiento" (por defecto)
        [DataType(DataType.Date)]//Especificando el tipo de dato    
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime FechaNacimiento { get; set; }
        public string Direccion { get; set; }
        public string Correo { get; set; }
    }

    /*La clase PeliculaDBContext representa el contexto de la base de datos de películas de Entity
    Framework  que maneja la obtención, el almacenamiento y la actualización de instancias de clase
    Película en una base de datos*/
    public class PersonaDBContext : DbContext
    {
        public DbSet<Persona> Personas { get; set; }
    }
}