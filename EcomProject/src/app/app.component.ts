import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './Services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public searchItem:string='';
  public title='Ecomproject';

  constructor(private router:Router,public searchservice:SearchService){}
  ngOnInit(): void {



  } search(event:any){
    this.router.navigate(['our-specials'])
    this.searchItem=(event.target as HTMLInputElement).value;
    this.searchservice.search.next(this.searchItem);
  }
}
