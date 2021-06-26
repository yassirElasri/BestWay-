import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from './../../../model/Categorie';
import {HttpServiceCategorieService} from './../../../services/http-service-categorie.service';
import {ProduitServiceService} from './../../../services/produit-service.service';
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
  constructor(private httpService :HttpServiceCategorieService ,private httpServiceProduit :ProduitServiceService ,private construireForm:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.httpService.fetchAll().subscribe(cat=>this.listCat=cat);
    this.formPro=this.construireForm.group({
      nom:[''],
      description:[''],
      prix:[],
      quantite:[],
      categorie_id:[''],
      
    });
  }
  envoyerForm2(){
    this.idCat=  this.formPro.controls.categorie_id.value;
   console.log(this.userFile);
const formData=new FormData();
const produit=this.formPro.value;
formData.append('produit',JSON.stringify(produit));
formData.append('file',this.userFile);
this.httpServiceProduit.addProduit(this.idCat,formData).subscribe(
  data=>{this.router.navigate(['/produit']);
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
