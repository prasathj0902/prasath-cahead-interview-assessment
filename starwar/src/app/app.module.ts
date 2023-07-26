import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import {  MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner"
import { DatePipe } from '@angular/common';
import {headerComponent} from './generic/header/header.component'
import {filmsComponent } from './Films/films.component';
import {filmsListComponent} from './Films/films-list/films-list.component';
import {popUpContentComponent } from './shared/pop-up/popup-content.component';
import {LoaderComponent} from './generic/loader/loader.componeent';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    filmsComponent,
    filmsListComponent,
    popUpContentComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
