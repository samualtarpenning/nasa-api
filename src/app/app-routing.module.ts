  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SatelliteImagingComponent } from './satellite-imaging/satellite-imaging.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'satellite-imaging', component: SatelliteImagingComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }