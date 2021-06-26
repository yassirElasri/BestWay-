package com.example.projetPfa.entites;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class Categorie implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Integer id;
		private String nom;
		@OneToMany(mappedBy="categorie")
		private Collection<Produit> produites;
		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}
		public String getNom() {
			return nom;
		}
		public void setNom(String nom) {
			this.nom = nom;
		}
		public Categorie(Integer id, String nom) {
			super();
			this.id = id;
			this.nom = nom;
		}
		public Categorie() {
			super();
		}
		@Override
		public String toString() {
			return "Categorie [id=" + id + ", nom=" + nom + ", produites=" + produites + "]";
		}
		
		
}
