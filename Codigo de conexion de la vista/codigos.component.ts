import { Component } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';
import { Proyecto } from '../modelos/modelo';


@Component({
    selector: 'codigos',
    templateUrl: '../views/codigos.html',
    providers: [PeticionesService]
})

export class CodigosComponent{
    public buscar:boolean;
    public mostrarCodigo;
    public proyecto: Proyecto;
    public titulo;
    public id: string[] = [];
    public lenguaje:string[] = [];
    public codigo:string[] = [];
    public tipo:string[] = [];
    public uso:string[] = [];
    public idd;
    constructor(
      private _peticiones: PeticionesService
    ){
        this.titulo = "hola"
        this.mostrarCodigo = false;
        this.proyecto = new Proyecto('','','','','');
        this.buscar = false;
        this.idd = '';
        /*
          public _id: String,
          public lenguaje: String,
          public codigo: String,
          public tipolenguaje: String,
          public usoprincipal: String
        */
    }
    ngOnInit(){
      this.getDatos();
    }
    mostrarC(){
      this.mostrarCodigo = !this.mostrarCodigo;
    }
    //AQUI SE HACE EL INSERT, SE MANDA A LLAMAR EL METODO DENTRO DEL SUBMIT QUE HAY EN EL FORMULARIO
    onSubmit(form:any){
      console.log(this.proyecto);
      this._peticiones.guardarDatos(this.proyecto).subscribe(
        data =>{
            console.log(data);
        },
        err =>{
          console.log("Error en el sistema");
        }
      );
      this.getDatos();

    }
    getDatos(){
      //AQUI SE HACE LA CONSULTA DE LOS DATOS A LA BASE DE DATOS
      this._peticiones.getDatos().subscribe(data =>{
            data.forEach((ele:any) =>{
                this.id.push(ele['_id']);
                this.lenguaje.push(ele['lenguaje']);
                this.codigo.push(ele['codigo']);
                this.tipo.push(ele['tipolenguaje']);
                this.uso.push(ele['usoprincipal'])
            })
      });
    }
    //FALTA A PARTIR DE LA ACTUALIZACION DE DATOS
    actualizarDatos(datos:any){
      this._peticiones.actualizarDatos(this.proyecto).subscribe(data =>{
          console.log(data);
      },
      err=>{
          console.log("Error en el sistema.")
      });
      this.getDatos()
    }


    deleteDatos(id:any){
      this.buscar = true;
      this._peticiones.deleteDatos(id).subscribe(data=>{
          console.log("Se han borrado correctamente los datos...")
          this.getDatos();
      },
    err=>{
        console.log("Error al borrar los datos", err);
    })
    }
    //AGARRA EL ID QUE SE LE BRINDE DESDE LA VISTA Y EJECUTA EL LINK "MOSTRARDOC" PARA DEVOLVER SOLO UN REGISTRO O UN DOCUMENTO
    getDato(id:any){
      this._peticiones.getDato(id).subscribe(data=>{
            this.proyecto._id = this.idd;
            this.proyecto.lenguaje = data.e.lenguaje;
            this.proyecto.codigo = data.e.codigo;
            this.proyecto.tipolenguaje = data.e.tipolenguaje;
            this.proyecto.usoprincipal = data.e.usoprincipal;
            console.log(this.proyecto);
      })
    }
    cambiarBus(){
      this.buscar = !this.buscar;
    }
}
