import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from 'src/app/model/Categorie';
import { Produit } from 'src/app/model/Produit';
import { ProduitServiceService } from 'src/app/services/produit-service.service';
import {HttpServiceCategorieService} from './../../../services/http-service-categorie.service';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  
  userFile;
imgUrl:any;
msg:string;
  ProduitTrouve:any;
  
  updateForm:FormGroup;
  public imagePath;
  listCat:Categorie[];
  id:String;
  idCat:number;
 
    constructor(private httpService :ProduitServiceService  ,private httpServiceCategorie :HttpServiceCategorieService  ,private construireForm:FormBuilder,private rout:ActivatedRoute,private router: Router,private toastr:ToastrService) { 
      
    }
  
    ngOnInit(): void {
      this.httpServiceCategorie.fetchAll().subscribe(cat=>this.listCat=cat);
      this.id=this.rout.snapshot.paramMap.get('id');
      
      this.updateForm=this.construireForm.group({
        
      nom:[''],
        description:[''],
        prix:[],
        quantite:[],
        categorie_id:[''],
      
        });
     this.id=this.rout.snapshot.paramMap.get('id');
      this.httpService.findProduit(+this.id).subscribe( user=>
        {
          this. ProduitTrouve=user;
        
          this.updateForm.patchValue({
            nom: this. ProduitTrouve.nom,
            description:this.ProduitTrouve.description,
            prix:this.ProduitTrouve.prix,
           quantite:this.ProduitTrouve.quantite,
           categorie_id:this.ProduitTrouve.categorie.id
          });
        });
       
        
       
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
    
   updateFinal(){
    this.idCat=  this.updateForm.controls.categorie_id.value;
    console.log(this.userFile);
 const formData=new FormData();
 const produit=this.updateForm.value;
 formData.append('produit',JSON.stringify(produit));
 formData.append('file',this.userFile);

     this.httpService.updateProduit(this.ProduitTrouve.id,this.idCat,formData).subscribe();
     this.router.navigate(['/admin/produit']);
     this.toastr.success('Modifié avec succès','succès',{
      timeOut:1200,
      progressBar:true
    })
   } }
