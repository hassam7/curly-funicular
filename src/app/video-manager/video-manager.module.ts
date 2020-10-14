import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared-module/shared.module';

import { VideoManagerRoutingModule } from './video-manager-routing.module';
import { ListVideosComponent } from './list-videos/list-videos.components';
import { AddVideoComponent } from './add-video/add-video.component';

const COMPONENTS = [
  ListVideosComponent,
  AddVideoComponent,
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    VideoManagerRoutingModule,
    SharedModule,
  ]
})
export class VideoManagerModule { }
