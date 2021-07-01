import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from './../../model/Categorie';
import {HttpServiceCategorieService} from './../../services/http-service-categorie.service';
import { Produit } from './../../model/Produit';
import {ProduitServiceService} from './../../services/produit-service.service';
import {HomeTempleteComponent} from './../../components/home-templete/home-templete.component';
@Component({
  selector: 'app-home-produit',
  templateUrl: './home-produit.component.html',
  styleUrls: ['./home-produit.component.css']
})
export class HomeProduitComponent implements OnInit {
  listProduit:Produit[];
  constructor(private httpService :HttpServiceCategorieService ,private httpServiceProduit :ProduitServiceService,private router:Router,private construireForm:FormBuilder,private homcomp:HomeTempleteComponent) { }
  listCat:Categorie[];
  currentCategorie:string;
  formSearch:FormGroup;
  nomProduit:string;
  ngOnInit(): void {
    this.homcomp.currentPage="home";
    this.currentCategorie="all";
    this.httpService.fetchAll().subscribe(cat=>this.listCat=cat);
    this.httpServiceProduit.fetchAll().subscribe(cat=>this.listProduit=cat);
    this.formSearch=this.construireForm.group({
      nom:[''],
    
      });
      this.isUserLoggedIn();
  }
  produitBycat(id){
    this.httpServiceProduit.findProduitByCat(id).subscribe(cat=>this.listProduit=cat);
    this.currentCategorie=id;
  }
  envoyerFormSearch(){
    this.nomProduit=  this.formSearch.controls.nom.value;
    this.httpServiceProduit.findProduitByNom(this.nomProduit).subscribe(cat=>this.listProduit=cat);
   
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
}
