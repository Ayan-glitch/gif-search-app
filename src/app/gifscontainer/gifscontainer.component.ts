import { Component,OnDestroy,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';
import { response } from 'express';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifscontainer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gifscontainer.component.html',
  styleUrl: './gifscontainer.component.css'
})
export class GifscontainerComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription = new Subscription;

  constructor(private dataservice: DataService){}
  
  ngOnInit(): void {
      this.dataservice.getTrendingGifs();
      this.subscription = this.dataservice.getGifs()
      .subscribe((response:any)=>{
        this.gifs = response;
      });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
