import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieDetails } from 'src/app/shared/models/MovieDetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id?:number;
  movie?:MovieDetails;
  constructor(private movieService:MoviesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {this.id = p['movieId']});
    this.movieService.getMovieDetails(this.id).subscribe(m => {this.movie = m});
  }

}
