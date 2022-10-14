import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';
import { ReadResourceComponent } from './read-resource/read-resource.component';

const resourceRoutes: Routes = [
  {
    path: 'read/resource',
    component: ReadResourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(resourceRoutes), RouterLink],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }