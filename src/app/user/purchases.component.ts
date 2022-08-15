import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Movie } from '../shared/models/Movie';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases:Movie[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserPurchases().subscribe(m => { this.purchases = m; })
  }

}
