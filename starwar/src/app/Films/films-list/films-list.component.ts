import { Component, OnInit, OnDestroy, Input, ViewChild, EventEmitter,Output } from "@angular/core";
import { Subscription, Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { HttpService } from "../../shared/httpService/http.service";
import { MatSort , Sort} from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import {popUpContentComponent} from '../../shared/pop-up/popup-content.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
    selector:'film-list',
    templateUrl:'./films-list.component.html',
    styleUrls:['./films-list.component.scss']
})

export class filmsListComponent implements OnInit, OnDestroy{
    @Input() tableData;
    @Input() columnHeader;
    public dataSource:any;
    public columnName:any =[]
    @ViewChild(MatSort) sort:MatSort;
   @ViewChild(MatPaginator, {static:true}) paginator:MatPaginator;
   // @ViewChild(MatPaginator) paginator:MatPaginator;
    public hidePaginator:boolean = false;
    constructor(
        private matDialog: MatDialog,
    ){}
    ngOnInit() {
        console.log(this.tableData) 
        console.log(this.columnHeader)
        for(let columnName of Object.keys(this.columnHeader)){
            this.columnName.push(columnName)           
        }
        this.loadTableData()
    }

    loadTableData(){
        this.dataSource = new MatTableDataSource(this.tableData);
        this.dataSource.sort = this.sort;
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.hidePaginator = this.tableData.length === 0 ? true:false
    }
    filmDetails(fInfo){
            console.log(fInfo)
            let dialogRef = this.matDialog.open(popUpContentComponent,{
                disableClose:true,
                width:'80%',
                height:'80%',
                data:fInfo
            })
                        
    }
    ngOnDestroy() {
        
    }
}