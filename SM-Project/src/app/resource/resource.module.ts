import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadResourceComponent } from './read-resource/read-resource.component';
import { ResourceRoutingModule } from './resource.routing.module';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    ReadResourceComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ResourceModule { }
