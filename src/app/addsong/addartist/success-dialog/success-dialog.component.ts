import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>) {}


  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
