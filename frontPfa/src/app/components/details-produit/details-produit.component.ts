import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/model/Categorie';
import { Produit } from 'src/app/model/Produit';
import { ProduitServiceService } from 'src/app/services/produit-service.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
id:string
produit:Produit;
  constructor(private httpServiceProduit :ProduitServiceService  ,private rout:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.rout.snapshot.paramMap.get('id');
      this.httpServiceProduit.findProduit(+this.id).subscribe(cat=>this.produit=cat);
  }

}
