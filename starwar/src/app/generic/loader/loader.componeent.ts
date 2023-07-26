import { Component, OnInit,OnDestroy } from "@angular/core";
import { BehaviorSubject,Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { loaderService } from "src/app/shared/services/loader.services";
@Component({
    selector:'loader',
    templateUrl: './loader.componeent.html',
    styleUrls:['./loader.componeent.scss']
})

export class LoaderComponent implements OnInit,OnDestroy{
    public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private ngUnsubscribe : Subject<void> = new Subject<void>();
    constructor(private loaderservices:loaderService){}
    ngOnInit() {
        this.loaderservices.isLoading
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(action =>{
            this.isLoading.next(action)
        })
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete()
    }
}