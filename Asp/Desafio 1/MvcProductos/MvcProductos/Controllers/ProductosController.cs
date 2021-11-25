using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcProductos.Models;

namespace MvcProductos.Controllers
{
    public class ProductosController : Controller
    {
        private ProductoContext db = new ProductoContext();

        // GET: Productos
        public ActionResult Index(string BuscarDescripcion, string BuscarExistencia, string BuscarPventa)
        {
            var productos = from p in db.Productos
                           select p;
            if (!String.IsNullOrEmpty(BuscarDescripcion))
            {
                productos = productos.Where(s => s.Descripcion.Contains(BuscarDescripcion));
            }
            if (!String.IsNullOrEmpty(BuscarExistencia))
            {
                productos = productos.Where(s => s.Existencia.ToString().Contains(BuscarExistencia));
            }
            if (!String.IsNullOrEmpty(BuscarPventa))
            {
                productos = productos.Where(s => s.PrecioVenta.ToString().Contains(BuscarPventa));
            }
            return View(productos);
        }

        // GET: Productos/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Producto producto = db.Productos.Find(id);
            if (producto == null)
            {
                return HttpNotFound();
            }
            return View(producto);
        }

        // GET: Productos/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Productos/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,IdProducto,Descripcion,Categoria,Costo,PrecioVenta,Existencia,NumPedidos")] Producto producto)
        {
            if (ModelState.IsValid)
            {
                //se comparan pedidos y existencias
                if(producto.NumPedidos > producto.Existencia)
                {
                    //se envia un mensaje de error temporal a la vista
                    TempData["errorPedido"] = "El numero de pedido no puede sobrepasar el numero de existencias";
                    //retornando a la vista create con el modelo de datos
                    return View(producto);
                }
                db.Productos.Add(producto);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(producto);
        }

        // GET: Productos/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Producto producto = db.Productos.Find(id);
            if (producto == null)
            {
                return HttpNotFound();
            }
            return View(producto);
        }

        // POST: Productos/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,IdProducto,Descripcion,Categoria,Costo,PrecioVenta,Existencia,NumPedidos")] Producto producto)
        {
            if (ModelState.IsValid)
            {
                //se comparan pedidos y existencias
                if (producto.NumPedidos > producto.Existencia)
                {
                    //se envia un mensaje de error temporal a la vista
                    TempData["errorPedido"] = "El numero de pedido no puede sobrepasar el numero de existencias";
                    //retornando a la vista create con el modelo de datos
                    return View(producto);
                }
                db.Entry(producto).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(producto);
        }

        // GET: Productos/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Producto producto = db.Productos.Find(id);
            if (producto == null)
            {
                return HttpNotFound();
            }
            return View(producto);
        }

        // POST: Productos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Producto producto = db.Productos.Find(id);
            db.Productos.Remove(producto);
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
