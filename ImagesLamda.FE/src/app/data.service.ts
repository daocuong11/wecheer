import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './images/image';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER = "https://3yutdoe3u2.execute-api.us-east-1.amazonaws.com/Prod/api";
  constructor(private httpClient: HttpClient) { }

  public getLastImage(){
    return this.httpClient.get(`${this.REST_API_SERVER}/Images/GetLastImage`);
  }

  public getImageInHour(){
    return this.httpClient.get(`${this.REST_API_SERVER}/Images/GetImageInHour`);
  }

  public addImage(payload: Image){
    return this.httpClient.post(`${this.REST_API_SERVER}/Images`, payload);
  }

}
