import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CastDetails } from 'src/app/shared/models/CastDetails';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http:HttpClient) { }

  getCastDetails(id?:number):Observable<CastDetails>{
    return this.http.get<CastDetails>("https://movieshopapi.azurewebsites.net/api/Cast/"+id);
  }
}