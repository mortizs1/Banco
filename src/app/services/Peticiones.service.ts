import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {map} from "rxjs/operators";
import 'rxjs/add/operator/map';

@Injectable()
export class PeticionesService{
    public url: string;

    constructor(private _http:Http){
        this.url = "https://jsonplaceholder.typicode.com/posts?userId=1";
    }


    /* getPrueba(){
        return "Hola desde el servicio.";
    } */

    getArticulos(){
        //_http es de objeto Http y privada, le hare un get a la url que esta en el construcctor
        // función map espera una respuesta del consumo que esta recibiendo y se hace un callback 
        //para pasar la respuesta a formato JSON
        return this._http.get(this.url)
                   .map(res => res.json());
    }

}