using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MvcPelicula
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
            //ruta para pasar como parametro nombre e id
            //el nombre de los param en la ruta deben coincidir con los nombres de param del metodo en el controller
            routes.MapRoute(
                name: "Hola",
                url: "{controller}/{action}/{nombre}/{apellido}/{numVeces}",
                defaults: new { controller = "Home", action = "Welcome"}
            );
        }
    }
}
