
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  constructor(public http: HttpClient) { }


  getallPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((res: any) => res))
  }
}
