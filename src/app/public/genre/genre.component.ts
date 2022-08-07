import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/core/services/genres.service';
import { Genre } from 'src/app/shared/models/Genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres?:Genre[];
  constructor(private genreService:GenresService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(g => {this.genres = g;});
  }

}
