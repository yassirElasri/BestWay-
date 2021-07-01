import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import{AchatServiceService} from 'src/app/services/achat-service.service'
import { ToastrService } from 'ngx-toastr';
import { Achat } from 'src/app/model/Achat';
@Component({
  selector: 'app-ges-achat',
  templateUrl: './ges-achat.component.html',
  styleUrls: ['./ges-achat.component.css']
})
export class GesAchatComponent implements OnInit {
  listAchat:Achat[]
  constructor( private rout:ActivatedRoute,private router:Router,private toastr:ToastrService,private AchatService:AchatServiceService) { }

  ngOnInit(): void {
    this.AchatService.fetchAll().subscribe(cat=>this.listAchat=cat);
  }

}
