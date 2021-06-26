import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../model/User';
import {UserServiceService} from './../../services/user-service.service';
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  constructor(private httpService :UserServiceService ,private construireForm:FormBuilder,private router:Router,private rout:ActivatedRoute) { }
  listUser:User[];
 
    role=this.rout.snapshot.paramMap.get('role');
  ngOnInit(): void {
  
   
    this.httpService.fetchAll(this.role).subscribe(cat=>this.listUser=cat);
  }

}
