import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import * as moment from 'moment';
import { SatelliteImage } from '../models/satellite-image';
@Component({
  selector: 'app-satellite-imaging',
  templateUrl: './satellite-imaging.component.html',
  styleUrls: ['./satellite-imaging.component.scss']
})
export class SatelliteImagingComponent implements OnInit {
fromDate: Date
lng: any
lat: any
satelliteImage: SatelliteImage
  constructor(private nasaApi: NasaService) { }

  ngOnInit(): void {
  }

  getImage(){
    // gets satellite image based on lat and lng coordinates + desired date of image provided by the user. 
    this.nasaApi.getSatelliteImage(parseInt(this.lat), parseInt(this.lng), moment(this.fromDate).format('YYYY-MM-DD') ).subscribe(res => {
     this.satelliteImage = res
    })
  }
}
