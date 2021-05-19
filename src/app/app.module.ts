import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SafePipeModule } from "safe-pipe";

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { SatelliteImagingComponent } from './satellite-imaging/satellite-imaging.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
  SatelliteImagingComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MatDatepickerModule,
		MatNativeDateModule,
		BrowserAnimationsModule,
		SharedModule.forRoot(),
    SafePipeModule
	],
	providers: [ MatDatepickerModule,],
	bootstrap: [AppComponent]
})
export class AppModule { }
