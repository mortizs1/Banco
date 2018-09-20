import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//tengo que importar los componentes que voy a utilizar
import { AddressComponent } from "./address/address.component";
import {InfoComponent } from "./info/info.component";
import { FailComponent } from "./fail/fail.component";

const appRoutes: Routes = [
    {path: '', component: AddressComponent},
    {path: 'info', component: InfoComponent},
    //cuando falla la ruta que aparezca este componente 404
    {path: '**', component: FailComponent}
];

export const appRoutingProvides: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);