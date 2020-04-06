import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-sucess-song-dialog',
  templateUrl: './sucess-song-dialog.component.html',
  styleUrls: ['./sucess-song-dialog.component.css']
})
export class SucessSongDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SucessSongDialogComponent>) {}


  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
