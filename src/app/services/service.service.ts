import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  public url='http://localhost:3000/api'
  constructor(public http:HttpClient) { }
  createLocation(data:any){
    console.log('inside of service');
    console.log(data);
  return this.http.post(this.url,data)
  }
  listLocations(){
    return this.http.get(this.url)
  }
}
