using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcPelicula.Controllers
{
    //extiende de la clase Controller
    public class HelloWorldController : Controller
    {
        // GET: HelloWorld
        //los metodos de controlador devuelven un tipo ActionResult
        public ActionResult Index()
        {
            //retornando a una plantilla de vista asociada al controller
            //al no establecer el nombre de una vista se usa por defecto la vista Index
            return View();
        }

        // GET: HelloWorld/Welcome
        public ActionResult Welcome(string nombre, string apellido , int numVeces = 1)
        {
            //Definiendo propiedades para el viewbag
            ViewBag.Mensaje = "Hola " + nombre + " " +apellido;
            ViewBag.NumVeces = numVeces;

            return View();
        }
    }
}