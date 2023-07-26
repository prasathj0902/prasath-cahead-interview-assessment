import {Component , OnInit, OnDestroy, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Subject} from 'rxjs';
import {takeUntil,filter,tap,take,catchError} from 'rxjs/operators';
import { HttpService } from '../httpService/http.service';
import { NavigationStart, Router, RouterEvent} from '@angular/router';
import { loaderService} from '../services/loader.services'

@Component({
    selector:'popup-content',
    templateUrl:'./popup-content.component.html',
    styleUrls:['./popup-content.component.scss']
})

export class popUpContentComponent implements OnInit,OnDestroy{
    public dialogContent:any;
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    public characters:any =[];
    constructor(
        @Inject(MAT_DIALOG_DATA) public data:any,
        private dialogRef: MatDialogRef<popUpContentComponent>,
        private httpService: HttpService,
        private router:Router,
        private loaderService:loaderService
    ){
        router.events.pipe(
            filter((event:RouterEvent) => event instanceof NavigationStart),
            tap(()=>this.dialogRef.close()),
            take(1),
        ).subscribe();
    }

    ngOnInit() {
       this.dialogContent = this.data;
       console.log(this.dialogContent)
       this.loaderService.show()
       this.dialogContent.characters.forEach((element) => {        
        this.httpService.getCall(element)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe({
            next:(response:any)=>{
                let tempObj = {}
                tempObj['name']= response.name;
                tempObj['mass']= response.mass;
                tempObj['height']= response.height;
                tempObj['skin_color']= response.skin_color;
                tempObj['films'] =response.films;
                this.characters.push(tempObj)           
            },
            error:(error)=>{
                this.loaderService.hide()
             console.log('error',error)
            }
        })
       });
       this.loaderService.hide()
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete()
    }
}