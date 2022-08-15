import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Movie } from '../shared/models/Movie';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites:Movie[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserFavorites().subscribe(m => {
      console.log(m); 
      this.favorites = m; 
    });
  }

}
