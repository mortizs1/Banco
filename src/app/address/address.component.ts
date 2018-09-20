import { Component } from "@angular/core";
import { Address } from "./address"
import {PeticionesService} from "../services/Peticiones.service";
//import {ClientesService} from "../services/clientes.service"

@Component({
  selector: "address",
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [PeticionesService]
})

export class AddressComponent{
  public address: Address;
  public direcciones:Array<Address>;
  public articulos;
  public opcionesList;

  constructor(private _peticionesServices: PeticionesService){
    this.address = new Address("","",null,"","","","",null,null,null,null,"",null,null,"",);
    this.direcciones = []
  }

  onSubmit(){
    console.log(this.address);
    this.direcciones.push(this.address);
    this.address = new Address("","",null,"","","","",null,null,null,null,"",null,null,"",);
    console.log(this.direcciones);
  }

  ngOnInit(){
    this._peticionesServices.getArticulos().subscribe(
      result => {
        this.articulos = result;
        console.log(result);
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }
}
