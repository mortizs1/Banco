import { Component } from '@angular/core';
import {Info} from './../models/info';

@Component({
  selector: 'info',
  templateUrl: './info.component.html'
})

export class InfoComponent{


  public nombre:string;
  public edad:number;
  fecha:number;
  public info:Info;
  public manyInfo:Array<Info>;

  /*lo primero que se carga es el constructor*/
  constructor(){
    this.info = new Info("Angel", "Ortiz", 22, false);
    this.manyInfo = [
      this.info = new Info("Angel1", "Ortiz1", 22, false),
      this.info = new Info("Angel2", "Ortiz2", 23, true),
      this.info = new Info("Angel3", "Ortiz3", 24, false)
    ];
  }


  /*lo segundo que se carga es el ngOnInit para llamar a metodos*/
  ngOnInit(){
    this.cambiarNombre();
    this.cambiarEdad();
    this.cambiarFecha(15)
    console.log(this.nombre + "" + this.fecha)
    console.log("estamos mostrando la info de la que estoy importando: " , this.info)
    console.log(this.manyInfo)
  }

  cambiarNombre(){
    this.nombre = "Miguel Angel";
  }

  cambiarEdad(){
    this.edad = 23;
  }

  cambiarFecha(fecha){
    this.fecha = fecha;
  }

}
