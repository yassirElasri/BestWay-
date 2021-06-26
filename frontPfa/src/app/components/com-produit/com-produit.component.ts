import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from './../../model/Produit';
import {ProduitServiceService} from './../../services/produit-service.service';
@Component({
  selector: 'app-com-produit',
  templateUrl: './com-produit.component.html',
  styleUrls: ['./com-produit.component.css']
})
export class ComProduitComponent implements OnInit {
  listProduit:Produit[];
  constructor(private httpService :ProduitServiceService,private router:Router) { }

  ngOnInit(): void {
    this.httpService.fetchAll().subscribe(cat=>this.listProduit=cat);
  }
  deleteProduit(id:number){
    this.httpService.deleteProduit(id).subscribe();
    this.ngOnInit();
      }

}
