import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private paginationService: PaginationService) { }

  ngOnInit(): void {
  }


  clickNext(){
    this.paginationService.disparadorPage.emit(10);
  }

  clickPrevius(){
    this.paginationService.disparadorPage.emit(-10);
  }


}
