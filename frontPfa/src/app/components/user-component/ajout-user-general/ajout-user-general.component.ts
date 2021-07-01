import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import{UserServiceService} from'./../../../services/user-service.service';
import {AdminTempleteComponent} from './../../admin-templete/admin-templete.component'
@Component({
  selector: 'app-ajout-user-general',
  templateUrl: './ajout-user-general.component.html',
  styleUrls: ['./ajout-user-general.component.css']
})
export class AjoutUserGeneralComponent implements OnInit {

  
 
  formUser:FormGroup;
 
  constructor(private httpService :UserServiceService  ,private construireForm:FormBuilder,private router:Router,private toastr:ToastrService,private compAdmin: AdminTempleteComponent) { }

  ngOnInit(): void {
    this.formUser=this.construireForm.group({
      username:['',Validators.required],
      email:['',Validators.required,Validators.email],
      password:[,Validators.required,Validators.min(1)],
      password2:[,Validators.required,Validators.min(1)],
      role:['',Validators.required],
      
    });
  }
  envoyerFormAjout(){
  

this.httpService.addUser(this.formUser.value).subscribe();
if(this.formUser.value.role=="client"){
  this.compAdmin.countClient=this.compAdmin.countClient+1;
}
this.formUser.reset();
  this.toastr.success('Ajouté avec succès','succès',{
    timeOut:1000,
    progressBar:true
  })




  }

}
