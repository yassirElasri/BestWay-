import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import{UserServiceService} from'./../../../services/user-service.service'
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-update-user-general',
  templateUrl: './update-user-general.component.html',
  styleUrls: ['./update-user-general.component.css']
})
export class UpdateUserGeneralComponent implements OnInit {
id:any
formUser:FormGroup;
UserTrouve:User

  constructor(private httpService :UserServiceService  ,private construireForm:FormBuilder,private router:Router,private toastr:ToastrService,private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.rout.snapshot.paramMap.get('id');
      
    this.formUser=this.construireForm.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:[],
     
      role:['',Validators.required],
      
    });
   this.id=this.rout.snapshot.paramMap.get('id');
    this.httpService.findUser(+this.id).subscribe( user=>
      {
        this.UserTrouve=user;
      
        this.formUser.patchValue({
         
          username:this.UserTrouve.username,
          email:this.UserTrouve.email,
         
          role:this.UserTrouve.role,
          
        });
        });
    
  }
  envoyerFormModif(){ this.httpService.updateUser(this.UserTrouve.id,this.formUser.value).subscribe();
    this.toastr.success('Modifié avec succès','succès',{
     timeOut:1000,
     progressBar:true
   })
    this.ngOnInit;
  }

}
