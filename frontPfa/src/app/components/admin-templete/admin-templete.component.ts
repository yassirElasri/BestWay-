import { Component, OnInit } from '@angular/core';
import {ProduitServiceService} from './../../services/produit-service.service';
import { HttpServiceCategorieService } from 'src/app/services/http-service-categorie.service';
import{UserServiceService} from './../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AchatServiceService } from'./../../services/achat-service.service'
@Component({
  selector: 'app-admin-templete',
  templateUrl: './admin-templete.component.html',
  styleUrls: ['./admin-templete.component.css']
})
export class AdminTempleteComponent implements OnInit {
countProduit:any
countCategorie:any
countClient:any
countCommandes:any
  constructor(private httpServiceProduit :ProduitServiceService, private httpServiceCategorie :HttpServiceCategorieService,private userService:UserServiceService,private router:Router,private rout:ActivatedRoute,private toastr:ToastrService,private achatServiceService :AchatServiceService ) { }

  ngOnInit(): void {
this.countProduit=this.httpServiceProduit.countProduit().subscribe(count=>this.countProduit=count);
this.countCategorie=this.httpServiceCategorie.countCategorie().subscribe(count=>this.countCategorie=count);
this.countClient=this.userService.countClient().subscribe(count=>this.countClient=count);
this.countCommandes=this.achatServiceService.countCommandes().subscribe(count=>this.countCommandes=count);
this.isUserLoggedIn();

  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
  
     if(user === null){
       return false;
     }
     else{
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
