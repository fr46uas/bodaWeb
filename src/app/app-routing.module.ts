import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodaComponent } from './pages/boda/boda.component';
import { ConfirmarComponent } from './pages/confirmar/confirmar.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'home', component: HomeComponent },
  { path: 'boda', component: BodaComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'login', component: RegistroComponent },
  { path: 'confirmar', component: ConfirmarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
