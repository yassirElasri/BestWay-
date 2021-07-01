import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Categorie } from './../../../model/Categorie';
import {HttpServiceCategorieService} from './../../../services/http-service-categorie.service';
import {ProduitServiceService} from './../../../services/produit-service.service';
import {AdminTempleteComponent} from './../../admin-templete/admin-templete.component'
@Component({
  selector: 'app-ajouter-produit-com',
  templateUrl: './ajouter-produit-com.component.html',
  styleUrls: ['./ajouter-produit-com.component.css']
})

export class AjouterProduitComComponent implements OnInit {
userFile;
imgUrl:any;
msg:string;
listCat:Categorie[];
formPro:FormGroup;
idCat:number;
public imagePath;
  constructor(private httpService :HttpServiceCategorieService ,private httpServiceProduit :ProduitServiceService ,private construireForm:FormBuilder,private router:Router,private toastr:ToastrService,private compAdmin: AdminTempleteComponent) { }

  ngOnInit(): void {
    this.httpService.fetchAll().subscribe(cat=>this.listCat=cat);
    this.formPro=this.construireForm.group({
      nom:['',Validators.required],
      description:['',Validators.required],
      prix:[,Validators.required,Validators.min(1)],
      quantite:[,Validators.required,Validators.min(1)],
      categorie_id:['',Validators.required],
      
      
    });
  }
  envoyerForm2(){
    this.idCat=  this.formPro.controls.categorie_id.value;
   console.log(this.userFile);
const formData=new FormData();
const produit=this.formPro.value;
formData.append('produit',JSON.stringify(produit));
formData.append('file',this.userFile);
this.compAdmin.countProduit=this.compAdmin.countProduit+1;
this.httpServiceProduit.addProduit(this.idCat,formData).subscribe(
  data=>{this.router.navigate(['/admin/produit']);
  this.toastr.success('Ajouté avec succès','succès',{
    timeOut:1000,
    progressBar:true
  })
}

);
  
  } envoyerForm(){
    this.idCat=  this.formPro.controls.categorie_id.value;
    console.log(this.idCat);
   // this.httpServiceProduit.addProduit(this.idCat,this.formPro.value)).subscribe();
     
  
}
  onSelectFile(event){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.userFile=file;
     var mimeType=event.target.files[0].type;
      if(mimeType.match(/image\/*/)==null){
        this.msg="only image are accepted";
        return;
      }
      var reader=new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(event)=>{
        this.imgUrl=reader.result;
      }
    }
  }
}
