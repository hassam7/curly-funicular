import { NzModalService } from 'ng-zorro-antd/modal';

import { Component, Inject, OnInit } from '@angular/core';
import { DATE_FORMAT_TOKEN } from 'src/app/services/date-format.token';
import { IVideo, ListVideosService } from './list-videos.service';

@Component({
  selector: 'list-videos',
  templateUrl: 'list-videos.component.html',
  styleUrls: ['list-videos.components.scss'],
})

export class ListVideosComponent implements OnInit {
  public searchTerm = '';
  public isLoading = true;
  public videosList: IVideo[] = [];
  private videosListOrignal: IVideo[] = [];

  constructor(
    private modal: NzModalService,
    @Inject(DATE_FORMAT_TOKEN) public dateFormat: string,
    private listVideosService: ListVideosService
  ) {
  }
  public ngOnInit(): void {
    this.listVideosService.get().subscribe(videos => {
      this.videosListOrignal = this.videosList = videos;
      this.isLoading = false;
    });
  }

  public performSearch(): void {
    const term = this.searchTerm;
    if (term) {
      this.videosList = this.videosListOrignal.filter(video => {
        return video.name.toLowerCase().includes(term) || video.authorDetails.name.toLowerCase().includes(term);
      });
    } else {
      this.videosList = this.videosListOrignal;
    }
  }

  public deleteVideo(video: IVideo): void {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to delete this video?',
      nzContent: `<b style="color: red;">${video.name} ?</b>`,
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => console.log('deleted'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
