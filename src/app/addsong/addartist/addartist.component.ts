import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, Validators,FormGroup } from "@angular/forms";
import { AddartistService } from './addartist.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component'
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';;
@Component({
  selector: 'app-addartist',
  templateUrl: './addartist.component.html',
  styleUrls: ['./addartist.component.css']
})
export class AddartistComponent implements OnInit {
  userForm:FormGroup;
  close:any;
  data:any;
  constructor(
    public dialogRef: MatDialogRef<AddartistComponent>,private addartistService:AddartistService,public dialog: MatDialog) {}

  ngOnInit() {
    this.userForm= new FormGroup({
      artistName: new FormControl("",[Validators.required]),
      dateOfBirth: new FormControl("",[Validators.required]),
      bio: new FormControl("",[Validators.required])
    });
    
  }
  public errorHandling = (control: string, error: string) => {
    return this.userForm.controls[control].hasError(error);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '550px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.close = result;
    });
  }
  openDialog1(): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.close = result;
    });
  }
  onSubmit(){
    console.log(this.userForm.value); 
    const formData=this.userForm.value;
    console.log(formData);
    this.postAddArtistData(formData);
   }
   postAddArtistData(formData:any){
    return this.addartistService.postFormData(formData).subscribe(
        res=>{
          this.data=res;
          this.openDialog();
          console.log(this.data);
            },
           error=>{ 
            this.openDialog1();
             console.log(error);
           }
  )}
}
