import { Component, OnInit } from '@angular/core';
import { DataResource } from '../models/dataResource.model';
import { ResourcePage } from '../models/reourcePage.model';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-read-resource',
  templateUrl: './read-resource.component.html',
  styleUrls: ['./read-resource.component.css']
})
export class ReadResourceComponent implements OnInit {

  page = '1';

  resources: ResourcePage
  dataResource: DataResource[];

  constructor(
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    this.getResources();
  }

  async getResources() {
    this.resourceService.getAllResources(`${this.page}`).subscribe((response) => {
      this.resources = response;
      this.dataResource = this.resources.data;
    });
  }

  isFirstPage() {
    this.page = '1';
    this.getResources()
  }

  isSecondPage() {
    this.page = '2';
    this.getResources()
  }

  isThirdPage() {
    this.page = '3';
    this.getResources()
  }

  isFourthPage() {
    this.page = '4';
    this.getResources()
  }
}
