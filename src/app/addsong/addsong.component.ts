import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup } from "@angular/forms";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddartistComponent } from './addartist/addartist.component';
import { AddSongService } from './add-song.service';
import { SucessSongDialogComponent } from './sucess-song-dialog/sucess-song-dialog.component';
import { ErrorSongDialogComponent } from './error-song-dialog/error-song-dialog.component';
@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})
export class AddsongComponent implements OnInit {
  
  userForm:FormGroup;
  close:any;
  top:any;
  data:any;
  constructor(public dialog: MatDialog,private addSongService:AddSongService) { }

  ngOnInit() {
    
    this.userForm= new FormGroup({
      songName: new FormControl("",[Validators.required]),
      dateOfRelease: new FormControl("",[Validators.required]),
      image: new FormControl("",[Validators.required]),
      myControl: new FormControl("",[Validators.required]),
     
    });
    this.getAllData()
  }
  public errorHandling = (control: string, error: string) => {
    return this.userForm.controls[control].hasError(error);
  }
 onSubmit(){
  console.log(this.userForm.value); 
  const formData=this.userForm.value;
  console.log(formData);
  this.postAddSongData(formData);
 }
//  onFileSelect(event) {
//   if (event.target.files.length > 0) {
//     const file = event.target.files[0];
//     this.userForm.get('image').setValue(file);
//   }
// }
 openDialog(): void {
  const dialogRef = this.dialog.open(AddartistComponent, {
    width: '550px',
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.close = result;
  });
}
openDialog1(): void {
  const dialogRef = this.dialog.open(SucessSongDialogComponent, {
    width: '350px',
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.close = result;
  });
}
openDialog2(): void {
  const dialogRef = this.dialog.open(ErrorSongDialogComponent, {
    width: '350px',
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.close = result;
  });
}
getAllData(){
  return this.addSongService.getArtistName().subscribe(
      result=>{
        this.top=result;
        console.log(this.top);
          },
         error=>{ 
           console.log(error);
         }
)}

postAddSongData(formData:any){
  return this.addSongService.postFormData(formData).subscribe(
      res=>{
        this.data=res;
        this.openDialog1();
        console.log();
          },
         error=>{ 
           this.openDialog2();
           console.log(error);
         }
)}

}
