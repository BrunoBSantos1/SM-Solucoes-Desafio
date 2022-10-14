import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataResource } from '../models/dataResource.model';
import { ResourcePage } from '../models/reourcePage.model';
import { ResponseDataResource } from '../models/responseDataResource';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  responseDataResource: ResourcePage
  dataresourceUser: DataResource

  constructor(
    private resourceService: ResourceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.datailsResource();
  }

  datailsResource() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.resourceService.readonlyResource(id).subscribe((response) => {
      this.dataresourceUser = response.data
      console.log(this.dataresourceUser.id)
    });
  }

}
