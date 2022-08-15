import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { ReviewDetails } from '../shared/models/ReviewDetails';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews:ReviewDetails[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserReviews().subscribe(m => { this.reviews = m; })
  }

}
