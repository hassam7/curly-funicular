import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CategoryListService } from '../../services/categories.service';
import { forkJoin, Observable, of } from 'rxjs';

export interface IServerResponseAuthor {
  id: number;
  name: string;
  videos: IServerResponseVideo[];
}

export interface IServerResponseVideo {
  id: number;
  catIds: number[];
  name: string;
  formats: IServerResponseFormats;
  releaseDate: string;
}

export interface IServerResponseFormats {
  [key: string]: {
    res: string;
    size: number;
  };
}

export interface IFormats {
  res: string;
  size: number;
}

export interface IVideo {
  id: number;
  name: string;
  formats: IFormats;
  releaseDate: string;
  authorDetails: IAuthorDetails;
  videoCategories: string;
}

export interface IAuthorDetails {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class ListVideosService {
  private categoryMap: Map<number, string> = new Map<number, string>();
  private readonly categoriesEndPoint = `/api/authors`;
  constructor(
    private httpClient: HttpClient,
    private categoryListService: CategoryListService,
  ) {
  }

  public get(): Observable<IVideo[]> {
    const categoriesMapObservable = this.categoryMap.size ? of(this.categoryMap) : this.categoryListService.getCategories();
    const httpCall = this.httpClient.get<IServerResponseAuthor[]>(this.categoriesEndPoint);
    return forkJoin([httpCall, categoriesMapObservable])
      .pipe(
        map(([responseFromServer, categoriesMap]) => {
          return this.mapResponseFromServer(responseFromServer, categoriesMap);
        }),
      );
  }

  private mapResponseFromServer(responseFromServer: IServerResponseAuthor[], categoriesList: Map<number, string>): IVideo[] {
    const videosTransformed: IVideo[] = responseFromServer.reduce((acc, current) => {
      const { id, name, videos } = current;
      videos.forEach(video => {
        const videoCategories = video.catIds.map(videoId => categoriesList.get(videoId)).join(', ');
        const { catIds, formats, ...videoWithoutExtraProps } = video;
        const [ transformedVideoFormat ] = Object.values(formats)
          .map(format => ({ ...format }))
          .sort(((first, second) => {
            const [firstRemaining, firstRes]: [string, number] = first.res.split(/(\d+)/) as [string, number];
            const [secondRemainingm, secondRes]: [string, number] = second.res.split(/(\d+)/) as [string, number];
            return secondRes - firstRes;
          }));
        const videoTransformed: IVideo = Object.assign(
          videoWithoutExtraProps,
          { formats: transformedVideoFormat },
          { authorDetails: { id, name } },
          { videoCategories },
        );
        acc.push(videoTransformed);
      });
      return acc;
    }, []);
    return videosTransformed;
  }

}
