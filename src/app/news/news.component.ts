import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {articlesObject, Article} from './../module/type';

//Decorator
@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

// Create observer object
export class NewsComponent implements OnInit {
  articles: Article[]=[];

  constructor(private apiService: ApiService) { }
  // eg hook
  ngOnInit() {
    this.apiService.getCovid().subscribe((data:articlesObject | any)=>{
      console.log(data);
     this.articles = data.articles;
    });
  }

  
}
