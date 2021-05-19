import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router: Router){

	}

	satelliteImagingNav(){
		this.router.navigate(['satellite-imaging'])
	}
	apodNav(){
		this.router.navigate(['home'])
	}
}
