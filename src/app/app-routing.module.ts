import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { EditarComponent } from './usuario/editar/editar.component';
import { DetalleComponent } from './usuario/detalle/detalle.component';


const routes: Routes = [
  {path: '', component: ListaProductoComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  {path: 'usuarios', component: UsuarioComponent},
  {path: 'usuarios/guardar', component: RegistrarComponent},
  {path: 'usuarios/detalle/:id', component: DetalleComponent},
  {path: 'usuarios/editar/:id', component: EditarComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
