import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http:HttpClient) { }

  getAllGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>("https://movieshopapi.azurewebsites.net/api/Genres");
  }
}