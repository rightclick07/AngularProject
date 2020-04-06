import { Component, OnInit ,Input} from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  displayedColumns: string[] = ['No.','Artwork', 'Song','Artists', 'Date of Release', 'Rating'];
  displayedColumns1: string[] = ['No.','Artists', 'Date of Birth', 'Songs'];
  top:any;
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.getAllData()
  }
  getAllData(){
    return this.homeService.getTopSongs().subscribe(
        result=>{
          this.top=result;
          console.log(this.top);
            },
           error=>{ 
             console.log(error);
           }
  )}
}
