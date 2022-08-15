import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/Movie';
import { ReviewDetails } from 'src/app/shared/models/ReviewDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserFavorites():Observable<Movie[]> {
    return this.http.get<Movie[]>('https://localhost:7292/api/User/favorites');
  }
  getUserPurchases():Observable<Movie[]> {
    return this.http.get<Movie[]>('https://localhost:7292/api/User/purchases');
  }
  getUserReviews():Observable<ReviewDetails[]> {
    return this.http.get<ReviewDetails[]>('https://localhost:7292/api/User/movie-reviews');
  }
}
