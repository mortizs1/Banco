import { Component } from '@angular/core';
/*esto es un decorador -> permite mostrar los metadatos */
@Component({
  /* este es el nombre del componente que se tienen en la etiqueta del index*/
  selector: 'app-root',
  /* esta es la vista asociada al componente*/
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarjetas de credito';
}
