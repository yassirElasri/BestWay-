import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-templete',
  templateUrl: './home-templete.component.html',
  styleUrls: ['./home-templete.component.css']
})
export class HomeTempleteComponent implements OnInit {
  
  constructor() { 
   
  
 } currentPage:string;
  ngOnInit(): void {
    this.currentPage="home";
 
}
}
