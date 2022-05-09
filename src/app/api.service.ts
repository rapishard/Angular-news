import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'fc75e88b7ebd4800989f97831ec42b13';

  public getCovid(){
       return this.httpClient.get(`https://newsapi.org/v2/top-headlines?q=covid&apiKey=${this.API_KEY}`);
 }
/* 
  public getItaly(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=it&apiKey=${this.API_KEY}`);
 
   }

   public getBbc(){
     return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${this.API_KEY}`);
   } */
  
  // observables from HTTP method calls.
  constructor(private httpClient: HttpClient) {
    
   }
   
}

