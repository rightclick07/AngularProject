import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-error-song-dialog',
  templateUrl: './error-song-dialog.component.html',
  styleUrls: ['./error-song-dialog.component.css']
})
export class ErrorSongDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ErrorSongDialogComponent>) {}


  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
