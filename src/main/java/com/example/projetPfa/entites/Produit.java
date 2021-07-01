package com.example.projetPfa.entites;
import java.util.Collection;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
public class Produit implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
	private String nom;
	private String description;
	private String image;
	private float prix;
	private int quantite;

	@ManyToOne
	@JoinColumn(name="categorie_id")

	private Categorie categorie;
    
    
 
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public float getPrix() {
		return prix;
	}
	public void setPrix(float prix) {
		this.prix = prix;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	public Categorie getCategorie() {
		return categorie;
	}
	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}
	public Produit(Integer id, String nom, String description, String image,float prix, int quantite,
			Categorie categorie) {
		super();
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.image = image;
		this.prix = prix;
		this.quantite = quantite;
		this.categorie = categorie;
	}
	public Produit() {
		super();
	}
	@Override
	public String toString() {
		return "Produit [id=" + id + ", nom=" + nom + ", description=" + description + ", image=" + image + ", prix="
				+ prix + ", quantite=" + quantite + ", categorie=" + categorie + "]";
	}
	
}
