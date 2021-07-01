import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../model/User';
import {UserServiceService} from './../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService :UserServiceService ,private construireForm:FormBuilder,private router:Router,private rout:ActivatedRoute,private toastr:ToastrService ) { }
  listUser:User;
  loginForm:FormGroup;
 password:any;
 
  ngOnInit(): void {
   
    this.loginForm=this.construireForm.group({
      email:['',Validators.required],
        password:['',Validators.required],
        });
        
  }
  checkUser(){
    this.httpService.findUserByEmail(this.loginForm.value.email).subscribe(user=>{this.listUser=user
      this.password=this.listUser.password 
      console.log(this.password)
     console.log(this.loginForm.value.password)
    if(this.password==this.loginForm.value.password){
      sessionStorage.setItem('idUserConnecte', this.listUser.id.toString())
      sessionStorage.setItem('username', this.listUser.username)
      sessionStorage.setItem('role', this.listUser.role)
      if(this.listUser.role=="admin"){
        this.router.navigate(['/admin/categorie']);
      }else{
        this.router.navigate(['/home/produit']);
      }
      
      this.toastr.success('Bienvenu','succès',{
       timeOut:1000,
       progressBar:true
     })
    }
    else{
      this.toastr.error('Verfier vos informations','Echec',{
        timeOut:1000,
     
      })

    }
     } );
 
    }
    

   

}
