import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomPicsService {

  url = 'https://picsum.photos/v2/list';

  public fetchRandoPics() {
    return this.http.get(this.url);
  }

  constructor(private http: HttpClient) {  }
}
