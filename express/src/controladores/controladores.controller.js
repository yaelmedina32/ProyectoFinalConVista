import { Infolenguaje } from '../modelos/infolenguaje.model.js';
import  express  from 'express';
const app = express();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const controlador1 = async (req,res)=>{
  try{
      const arrLenguaje = await Infolenguaje.find();
      console.log(arrLenguaje)
      res.send(arrLenguaje)
    }
    catch(error){
      console.log(error)
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const controlador2 = async(req,res)=>{
    return res.send(`<h1> buenas tardes </h1>
          <p> Esto es un texto <strong> desde nodejs </strong> para comprobar </h1>
        `)
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const saveProject = async(req,res)=>{
    const lenguaje = new Infolenguaje();
    let params = req.body;
        lenguaje.lenguaje = params.lenguaje;
        lenguaje.codigo = params.codigo;
        lenguaje.tipolenguaje = params.tipolenguaje;
        lenguaje.usoprincipal = params.usoprincipal;
        lenguaje.save((err, e)=>{
              if(err) return res.status(500).send({mensaje: 'Error al guardar el archivo'});
              if (!e)  return res.status(404).send({mensaje: 'No hay datos por guardar'});
              return res.status(200).send({mensaje:'Se ha guardado con exito el archivo', lenguaje: e});
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const mostrarDoc = async(req,res)=>{
    const params = req.body;
    const projectId = req.params.id;
    if (projectId == null) return res.status(404).send({mensaje:'no se ha encontrado el ID'});

    Infolenguaje.findById(projectId, (err, e)=>{
        if(err) return res.status(500).send({mensaje: 'Error en el servidor'});
        if(!e) return res.status(404).send({mensaje:'No se ha encontrado el documento'});
        return res.status(200).send(
          {e}
        )
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const actualizarDatos = async(req,res)=>{
      const params = req.body;
      const projectId = req.params.id;

      Infolenguaje.findByIdAndUpdate(projectId, params,(err, e)=>{
          if(err) return res.status(500).send({mensaje:'Error al actualizar'});
          if(!e) return res.status(404).send({mensaje: 'Documento no encontrado'})
          return res.status(200).send({lenguajes: e});
      })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deleteDatos = async(req,res)=>{
    const params = req.body;
    const projectId = req.params.id;
    Infolenguaje.findByIdAndDelete(projectId, (err,e)=>{
        if(err) return res.status(500).send({mensaje:'Error al eliminar'});
        if(!e) return res.status(404).send({mensaje: 'No se encontro el documento seleccionado'});
        return res.status(200).send({lenguajeeliminado:e});
    });
}
