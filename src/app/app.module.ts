import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProvides } from './app.routing'



import { AppComponent } from './app.component';

import { AddressComponent } from './address/address.component';
import { InfoComponent } from './info/info.component';
import { FailComponent } from './fail/fail.component';
//import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    InfoComponent,
    FailComponent
    //FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProvides],
  bootstrap: [AppComponent]
})
export class AppModule { }
