import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/model/Categorie';
import { HttpServiceCategorieService } from 'src/app/services/http-service-categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {
  CatTrouve: Categorie;
  updateForm:FormGroup;
    constructor(private httpService :HttpServiceCategorieService ,private construireForm:FormBuilder,private rout:ActivatedRoute,private router: Router) { 
      
    }
  
    ngOnInit(): void {
      this.updateForm=this.construireForm.group({
        nom:['']
      
        });
      const id=this.rout.snapshot.paramMap.get('id');
      this.httpService.findUser(+id).subscribe( user=>
        {
          this.CatTrouve=user;
          this.updateForm.patchValue({
            nom: this.CatTrouve.nom,
           
          });
        });
    
      
        
       
    }
   updateFinal(){
     this.httpService.updateUser(this.CatTrouve.id,this.updateForm.value).subscribe();
     this.router.navigate(['/categorie']);
   } }
