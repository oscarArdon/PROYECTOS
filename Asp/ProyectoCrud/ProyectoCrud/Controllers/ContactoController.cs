using ProyectoCrud.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
//para uscar comandos sql
using System.Data.SqlClient;
using System.Data;

namespace ProyectoCrud.Controllers
{
    public class ContactoController : Controller
    {
        //para enlazar cadena de conexion del webconfig
        private static string conexion = ConfigurationManager.ConnectionStrings["cadena"].ToString();
        //lista para almacenar contactos
        private static List<Contacto> olista;        

        // GET: Contacto ... para hacer vista seleccionar nombre del actionResult y dar click derecho
        public ActionResult Inicio()
        {
            olista = new List<Contacto>();

            using (SqlConnection oconexion = new SqlConnection(conexion))
            {
                SqlCommand cmd = new SqlCommand("select * from CONTACTO",oconexion);
                //comando de texto sql
                cmd.CommandType = CommandType.Text;
                oconexion.Open();
                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        Contacto nuevoContacto = new Contacto();

                        nuevoContacto.IdContacto = Convert.ToInt32(dr["IdContacto"]);
                        nuevoContacto.Nombres = dr["Nombres"].ToString();
                        nuevoContacto.Apellidos = dr["Apellidos"].ToString();
                        nuevoContacto.Telefono = dr["Telefono"].ToString();
                        nuevoContacto.Correo = dr["Correo"].ToString();
                        Console.WriteLine(nuevoContacto);
                        olista.Add(nuevoContacto);
                    }
                }
                oconexion.Close();
            }
            return View(olista);
        }

        public ActionResult Registrar()
        {
            return View();
        }     
        
        [HttpPost]
        public ActionResult Registrar(Contacto ocontacto)
        {
            //los nombres de los input en la vista deben ser iguales a los de la clase o modelo
            using (SqlConnection oconexion = new SqlConnection(conexion))
            {                
                
                try
                {
                    SqlCommand cmd = new SqlCommand("sp_Registrar", oconexion);
                    //el primer parametro corresponde al nombre del parametro definido en el P.A
                    cmd.Parameters.AddWithValue("Nombres", ocontacto.Nombres);
                    cmd.Parameters.AddWithValue("Apellidos", ocontacto.Apellidos);
                    cmd.Parameters.AddWithValue("Telefono", ocontacto.Telefono);
                    cmd.Parameters.AddWithValue("Correo", ocontacto.Correo);
                    //definiendo que comando es un procedimiento almacenado
                    cmd.CommandType = CommandType.StoredProcedure;

                    oconexion.Open();
                    cmd.ExecuteNonQuery();
                }
                catch (Exception)
                {                    
                    throw;
                }               
            }

            return RedirectToAction("Inicio","Contacto");
        }

        public ActionResult Editar(int? idContacto)
        {
            if(idContacto == null)
                return RedirectToAction("Inicio", "Contacto");

            //La lista que ya tiene los datos se filtra con el id del parametro
            Contacto ocontacto = olista.Where(c => c.IdContacto == idContacto).FirstOrDefault();

            return View(ocontacto);
        }

        [HttpPost]
        public ActionResult Editar(Contacto ocontacto)
        {
            using (SqlConnection oconexion = new SqlConnection(conexion))
            {
                SqlCommand cmd = new SqlCommand("sp_Editar", oconexion);
                cmd.Parameters.AddWithValue("IdContacto", ocontacto.IdContacto);
                cmd.Parameters.AddWithValue("Nombres", ocontacto.Nombres);
                cmd.Parameters.AddWithValue("Apellidos", ocontacto.Apellidos);
                cmd.Parameters.AddWithValue("Telefono", ocontacto.Telefono);
                cmd.Parameters.AddWithValue("Correo", ocontacto.Correo);
                cmd.CommandType = CommandType.StoredProcedure;

                oconexion.Open();
                cmd.ExecuteNonQuery();

                return RedirectToAction("Inicio", "Contacto");
            }
        }

        public ActionResult Eliminar(int? idContacto)
        {
            if (idContacto == null)
                return RedirectToAction("Inicio", "Contacto");

            //La lista que ya tiene los datos se filtra con el id del parametro
            Contacto ocontacto = olista.Where(c => c.IdContacto == idContacto).FirstOrDefault();

            return View(ocontacto);
        }

        [HttpPost]
        public ActionResult Eliminar(string IdContacto)
        {
            using (SqlConnection oconexion = new SqlConnection(conexion))
            {
                SqlCommand cmd = new SqlCommand("sp_Eliminar", oconexion);
                cmd.Parameters.AddWithValue("IdContacto", IdContacto);                
                cmd.CommandType = CommandType.StoredProcedure;

                oconexion.Open();
                cmd.ExecuteNonQuery();

                return RedirectToAction("Inicio", "Contacto");
            }
        }
    }
}