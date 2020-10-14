import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ICategory {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class CategoryListService {
  private readonly categoriesEndPoint = `/api/categories`;

  constructor(private httpClient: HttpClient) {
  }

  public getCategories(): Observable<Map<number, string>> {
    const endpoint = this.categoriesEndPoint;
    return this.httpClient.get<ICategory[]>(endpoint).pipe(map(this.transformCategories));
  }

  private transformCategories = (categories: ICategory[]): Map<number, string> => {
    const categoryMap: Map<number, string> = new Map();
    categories.forEach(category => categoryMap.set(category.id, category.name));
    return categoryMap;
  }
}
