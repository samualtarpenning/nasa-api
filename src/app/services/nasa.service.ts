import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { Apod } from "../models/apod";
import { SatelliteImage } from "../models/satellite-image";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class NasaService {
  private apiKey = environment.NASA_KEY;

  constructor(private http: HttpClient) {}

  public getNasaImages(): Observable<Apod> {
    // const year = new Date().getFullYear();
    // const month = new Date().getMonth() + 1;
    // const day = new Date().getDate();
    this.apiKey = environment.NASA_KEY;
    const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&count=10`;
    return this.http.get<Apod>(apodUrl).pipe(
      take(1),
      catchError((err: any) => {
        return throwError("Problem fetching apod from NASA API, error: ", err);
      })
    );
  }

  public getSatelliteImage(lat, lng, date){
    this.apiKey = environment.NASA_KEY;
    const satelliteImageUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${lng}.33&lat=${lat}&date=${date}&&dim=0.10&api_key=${this.apiKey}`;
    return this.http.get<SatelliteImage>(satelliteImageUrl).pipe(
      take(1),
      catchError((err: any) => {
        return throwError("Problem fetching apod from NASA API, error: ", err);
      })
    );
  }
}
