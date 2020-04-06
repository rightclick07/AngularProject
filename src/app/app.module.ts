import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-rating-star';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { AddsongComponent } from './addsong/addsong.component';
import { AddartistComponent } from './addsong/addartist/addartist.component';
import { SuccessDialogComponent } from './addsong/addartist/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './addsong/addartist/error-dialog/error-dialog.component';
import { SucessSongDialogComponent } from './addsong/sucess-song-dialog/sucess-song-dialog.component';
import { ErrorSongDialogComponent } from './addsong/error-song-dialog/error-song-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddsongComponent,
    AddartistComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    SucessSongDialogComponent,
    ErrorSongDialogComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgMatSearchBarModule,
    HttpClientModule,
    MatAutocompleteModule,
    StarRatingModule,
    MatSelectModule,
    
    
  ],
  providers: [
   
  ],
  entryComponents:[AddartistComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    SucessSongDialogComponent,
    ErrorSongDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
