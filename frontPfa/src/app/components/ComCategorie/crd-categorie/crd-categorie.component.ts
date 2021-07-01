import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Categorie } from './../../../model/Categorie';
import {HttpServiceCategorieService} from './../../../services/http-service-categorie.service';
import {AdminTempleteComponent} from './../../admin-templete/admin-templete.component'
@Component({
  selector: 'app-crd-categorie',
  templateUrl: './crd-categorie.component.html',
  styleUrls: ['./crd-categorie.component.css']
})
export class CrdCategorieComponent implements OnInit {

  constructor(private httpService :HttpServiceCategorieService ,private construireForm:FormBuilder,private router:Router,private toastr:ToastrService,private compAdmin: AdminTempleteComponent) { }
listCat:Categorie[];
formCat:FormGroup;
formCatUpdate:FormGroup;
showFormUser=false;
showBtnAjo=true;
showUpdate=false;
CatTrouve:Categorie;
  ngOnInit(): void {
    this.httpService.fetchAll().subscribe(cat=>this.listCat=cat);
    this.formCat=this.construireForm.group({
    nom:['',Validators.required],
  
    });
  }
  envoyerForm(){
    this.httpService.addUser(this.formCat.value).subscribe();
   this.compAdmin.countCategorie=this.compAdmin.countCategorie+1;
    this.ngOnInit();
    this.toastr.success('Ajouté avec succès','succès',{
      timeOut:1000,
      progressBar:true
    })
    this.formCat.reset();
  }
  showForm(){
this.showFormUser=!this.showFormUser;
this.showBtnAjo=!this.showBtnAjo;
  }
  deleteUser(id:number){
    this.httpService.deleteUser(id).subscribe();
     this.toastr.success('Supprimé avec succès','succès',{
      timeOut:1000,
      progressBar:true
    })
    this.router.navigate(['admin/categorie']);
   
      }
      showFormUpdate(id:number){
        this.showUpdate=!this.showUpdate;
        
        this.httpService.findUser(id).subscribe( cat=>
          {
            this.CatTrouve=cat;
            /*this.formCatUpdate.patchValue({
              nom: this.CatTrouve.nom,
             
            });*/
            console.log(id);
          });}
          updateFinal(){
            this.httpService.updateUser(this.CatTrouve.id,this.formCatUpdate.value).subscribe();
            this.router.navigate(['admin/categorie']);
          }

          }


