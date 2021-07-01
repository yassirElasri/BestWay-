import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../../model/User';
import {UserServiceService} from './../../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private httpService :UserServiceService ,private construireForm:FormBuilder,private router:Router,private rout:ActivatedRoute,private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.registerForm=this.construireForm.group({
      username:['',Validators.required],
      email:['',Validators.required],
        password:['',Validators.required],
        role:['client'],
   
        });
        
  }
 addUser(){
  this.httpService.addUser(this.registerForm.value).subscribe();
  
  this.router.navigate(['/home/login']);
    this.toastr.success('Vous pouvez utiliser vos informations pour se connecter','Bienvenu',{
      timeOut:1000,
      progressBar:true
    })
 }
}
