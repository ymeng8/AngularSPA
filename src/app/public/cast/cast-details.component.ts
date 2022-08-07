import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastService } from 'src/app/core/services/casts.service';
import { CastDetails } from 'src/app/shared/models/CastDetails';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  id?:number;
  castDetails?:CastDetails;
  constructor(private castService:CastService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {this.id = p['castId'];});
    this.castService.getCastDetails(this.id).subscribe(c => {this.castDetails = c;});
  }

}
