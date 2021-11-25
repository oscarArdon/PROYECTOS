using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcPelicula.Models;

namespace MvcPelicula.Controllers
{
    public class PeliculasController : Controller
    {
        //atributo de la clase de contexto para manipular la bd
        private PeliculaDBContext db = new PeliculaDBContext();

        // GET: Peliculas
        public ActionResult Index(string buscarString, string generoPelicula)
        {
            //Lista para almacenar strings
            var GeneroLst = new List<String>();
            //Query pra recuperar los generos de la tabla peliculas
            var GeneroQry = from d in db.Peliculas
                            orderby d.Genero
                            select d.Genero;

            //Agregando generos obtenidos del query anterior a la lista GeneroLst
            GeneroLst.AddRange(GeneroQry.Distinct());//Disctinct() elimina los registro repetidos

            //Almacenando la lista de generos en un obj selectlist usando viewbag
            //estos datos se desplagaran en la lista como un select
            ViewBag.generoPelicula = new SelectList(GeneroLst); //SelectList(GeneroLst, "accion"); si se desea dejar una opcion predetermminada

            //consulta linq
            var peliculas = from p in db.Peliculas select p;

            if (!String.IsNullOrEmpty(buscarString))
            {
                //si existe una cadena, entonces, la consulta de peliculas se modifica para filtrar el valor
                //de la cadena de busqueda
                peliculas = peliculas.Where(s => s.Titulo.Contains(buscarString));
            }

            if (!String.IsNullOrEmpty(generoPelicula))
            {
                peliculas = peliculas.Where(x => x.Genero == generoPelicula);
            }

            return View(peliculas);
        }

        // GET: Peliculas/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            //instancia del modelo pelicula para almacenar un registro con el id buscado
            //luego db es usado para buscar en la bd el registro
            Pelicula pelicula = db.Peliculas.Find(id);
            if (pelicula == null)
            {
                return HttpNotFound();
            }
            //retornando un objeto "Pelicula" a la vista Details
            return View(pelicula);
        }

        // GET: Peliculas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Peliculas/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Titulo,FechaLanzamiento,Genero,Precio")] Pelicula pelicula)
        {
            if (ModelState.IsValid)
            {
                db.Peliculas.Add(pelicula);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(pelicula);
        }

        // GET: Peliculas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            //busca una pelicula usando el context
            Pelicula pelicula = db.Peliculas.Find(id);
            if (pelicula == null)
            {
                return HttpNotFound();
            }
            //retornando objeto pelicula a la vista del form para editar
            return View(pelicula);
        }

        // POST: Peliculas/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]//El atributo ValidateAntiForgeryToken se usa para evitar la falsificación de una solicitud
        /*. El atributo Bind es otro mecanismo de seguridad importante
        que evita que los hackers publiquen datos en exceso en su modelo. Solo debe incluir propiedades
        en el atributo de enlace que desea cambiar*/
        public ActionResult Edit([Bind(Include = "ID,Titulo,FechaLanzamiento,Genero,Precio")] Pelicula pelicula)
        {
            if (ModelState.IsValid)
            {
                db.Entry(pelicula).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(pelicula);
        }

        // GET: Peliculas/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Pelicula pelicula = db.Peliculas.Find(id);
            if (pelicula == null)
            {
                return HttpNotFound();
            }
            return View(pelicula);
        }

        // POST: Peliculas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Pelicula pelicula = db.Peliculas.Find(id);
            db.Peliculas.Remove(pelicula);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
