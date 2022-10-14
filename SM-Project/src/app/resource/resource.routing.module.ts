import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ReadResourceComponent } from './read-resource/read-resource.component';

const resourceRoutes: Routes = [
  {
    path: 'read/resource',
    component: ReadResourceComponent
  },
  {
    path: 'read/resource/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(resourceRoutes), RouterLink],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }