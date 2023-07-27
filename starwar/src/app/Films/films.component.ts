import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { HttpService } from "../shared/httpService/http.service";
import {loaderService} from "../shared/services/loader.services"

@Component({
    selector:'films',
    templateUrl:'./films.component.html',
    styleUrls:['./films.component.scss']
})

export class filmsComponent implements OnInit, OnDestroy{
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    public filmsList:any;
    public columnHeader= {}
    constructor(private httpService :HttpService,
        private loaderService: loaderService){
    }

    ngOnInit(){
        this.loaderService.show()
       this.httpService.getCall("https://swapi.dev/api/films")
       .pipe(takeUntil(this.ngUnsubscribe))
       .subscribe({
           next:(response:any)=>{
           
            this.filmsList = response.results;
            this.columnHeader={
                title:'Title',
                director:'Director',
                producer:'Producer',
                release_date:'Release date',
                episode_id:'Episode No',
            }
            this.loaderService.hide()
           },
           error:(error)=>{
            console.log('error',error)
            this.loaderService.hide()
           }
       })
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete()
    }
}