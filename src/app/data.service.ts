import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifs = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) { }
  getTrendingGifs(){
    return this.http.get(` https://api.giphy.com/v1/gifs/trending?api_key=Sa8rQ5G3jtXKdQaCi4vpAcqkpkIJ3x5b&limit=30&offset=0&rating=g&bundle=messaging_non_clips`)
    .subscribe((response:any)=>{
      this.gifs.next(response.data);
    });

  }
  searchGifs(gifname: string){
    return this.http.get(` https://api.giphy.com/v1/gifs/search?q=${gifname}&api_key=Sa8rQ5G3jtXKdQaCi4vpAcqkpkIJ3x5b&limit=30&offset=0&rating=g&bundle=messaging_non_clips`)
    .subscribe((response:any)=>{
      this.gifs.next(response.data);
    });
  }

  getGifs(){
    return this.gifs.asObservable();
  }
}
