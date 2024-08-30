import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { response } from 'express';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements OnInit{
  constructor(private dataservice: DataService){}

  ngOnInit(): void {
      
  }

  search(searchterm : string){
    if(searchterm != '')  {
      this.dataservice.searchGifs(searchterm);
   }

  }

}
