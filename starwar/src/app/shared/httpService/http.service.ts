import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class HttpService{
    constructor(
        private http:HttpClient
    ){

    }
    
   

    getCall(apiURL:any){
        return this.http.get(apiURL)
    }
}