import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import { ListVideosComponent } from './list-videos/list-videos.components';

const routes: Routes = [
  {
    path: '',
    component: ListVideosComponent,
  },
  {
    path: 'add-video',
    component: AddVideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoManagerRoutingModule { }
