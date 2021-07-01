import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../../model/User';
import {UserServiceService} from './../../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.css']
})
export class ClientComponentComponent implements OnInit {

  
  constructor(private httpService :UserServiceService ,private construireForm:FormBuilder,private router:Router,private rout:ActivatedRoute,private toastr:ToastrService) { }
  listUser:User[];

 
  ngOnInit(): void {
    
  this.httpService.fetchAll("client").subscribe(cat=>this.listUser=cat);
   
  }
  deleteUser(id:number){
    this.httpService.deleteUser(id).subscribe();
     this.toastr.success('Supprimé avec succès','succès',{
      timeOut:1000,
      progressBar:true
    })
    this.router.navigate(['admin/user/client']);
   
      }

}
