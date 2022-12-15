import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Proyecto } from '../modelos/modelo';

@Injectable()
export class PeticionesService{
    public url:string;
    constructor(
      private _http: HttpClient
    ){
      this.url = 'http://localhost:3030/';
    }
    /*
      getDatos1(document: Proyecto): Observable<any>{
        let params = JSON.stringify(document);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        //ESTA PARTE SIRVE PARA MANDAR LA PETICION AL SERVIDOR CON LA URL, LOS PARAMETROS DE LA URL Y LOS HEADERS
        return this._http.post(this.url + params, {headers: headers});
      }*/
      getDatos(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        //ESTA PARTE SIRVE PARA MANDAR LA PETICION AL SERVIDOR CON LA URL, LOS PARAMETROS DE LA URL Y LOS HEADERS
        return this._http.get(this.url + 'prueba', {headers: headers});
      }
      guardarDatos(proyecto: Proyecto):Observable<any>{
        let params = JSON.stringify(proyecto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'guardarDoc', params,{headers: headers});
      }
      actualizarDatos(proyecto:Proyecto):Observable<any>{
          let params = JSON.stringify(proyecto);
          let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'actualizarDoc/' + proyecto._id, params, {headers: headers});
      }
      deleteDatos(id:any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'deleteDoc/' + id, {headers: headers})
      }
      getDato(id:any):Observable<any>{
          let headers = new HttpHeaders().set('Content-Type', 'application/json');
          return this._http.get(this.url + 'mostrarDoc/' + id, {headers: headers})
      }
    }
