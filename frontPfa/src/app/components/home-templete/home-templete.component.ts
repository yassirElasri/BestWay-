import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-templete',
  templateUrl: './home-templete.component.html',
  styleUrls: ['./home-templete.component.css']
})

export class HomeTempleteComponent implements OnInit {
   
  constructor(private router:Router,private rout:ActivatedRoute,private toastr:ToastrService ) { 
   
  
 } role:string;
 currentPage:string;
 
  ngOnInit(): void {
    this.currentPage="home";
 
    this.isUserLoggedIn();

  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
  
     if(user === null){ 
       console.log("dec");
       return false;
      
     }
     else{
      console.log("con");
     this.role = sessionStorage.getItem('role');
      console.log(user);
      console.log(this.role);
      
       return true;
      
     }
}
logOut() {
  sessionStorage.removeItem('username')
  sessionStorage.removeItem('idUserConnecte')
      
      this.router.navigate(['/home/produit']);
      this.toastr.info('vous vous etes déconnecté','Au revoir',{
        timeOut:100,
        progressBar:true
      })
}
}
