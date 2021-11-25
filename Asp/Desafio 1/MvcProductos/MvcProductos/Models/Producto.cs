using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcProductos.Models
{
    public class Producto
    {
        public int ID { get; set; }
        [Display(Name = "ID de producto")]        
        [RegularExpression(@"^[A-Z]{3}[0-9]{4}", ErrorMessage = "Formato de codigo: AAA1234")]
        public string IdProducto { get; set; }
        public string Descripcion { get; set; }
        public string Categoria { get; set; }
        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = true)]
        [RegularExpression(@"^[0-9]*(\.[0-9]{1,4})?$", ErrorMessage = "Formato: 10.00")]
        public double Costo { get; set; }
        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = true)]
        [Display(Name = "Precio de venta")]
        [RegularExpression(@"^[0-9]*(\.[0-9]{1,4})?$", ErrorMessage = "Formato: 10.00")]
        public double PrecioVenta { get; set; }        
        [RegularExpression(@"^[1-9]+[0-9]*$", ErrorMessage = "Solo se permiten números enteros positivos")]        
        public int Existencia { get; set; }        
        [Display(Name = "Número de pedidos")]
        [RegularExpression(@"^[1-9]+[0-9]*$", ErrorMessage = "Solo se permiten números enteros positivos")]
        public int NumPedidos { get; set; }

    }

    //contexto que permite trabajar con la base de datos Producto
    public class ProductoContext : DbContext
    {
        public DbSet<Producto> Productos { get; set; }
    }
}