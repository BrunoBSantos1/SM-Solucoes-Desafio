import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadResourceComponent } from './read-resource/read-resource.component';
import { ResourceRoutingModule } from './resource.routing.module';




@NgModule({
  declarations: [
    ReadResourceComponent
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule
  ],
  exports: []
})
export class ResourceModule { }
