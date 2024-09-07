import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http;

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  public buscarPosts() {
    let url = "https://dummyjson.com/c/2604-fe58-4de0-a32a";
    return this.http.get(url).toPromise();
  }
}
