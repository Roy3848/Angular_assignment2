import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  
  product(): Observable<any>
  {
    return this.http.get('http://localhost:3000/Products')
  }
  
  
}