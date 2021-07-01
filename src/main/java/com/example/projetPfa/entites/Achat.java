package com.example.projetPfa.entites;

 

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

 

@Entity
public class Achat {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
        private Integer id;
    
    @OneToOne 
    @JoinColumn(name ="user_id",referencedColumnName = "id")
        private User user;
    @OneToOne 
    @JoinColumn(name ="produit_id",referencedColumnName = "id")
        private Produit produit;
    
    
    private Integer quantite;
    private Boolean done;
    private String modePaiement;
    
    
    
    public Achat() {
        super();
    }

 

 

    public Achat(Integer id, User user, Produit produit, Integer quantite, Boolean done, String modePaiement) {
        super();
        this.id = id;
        this.user = user;
        this.produit = produit;
        this.quantite = quantite;
        this.done = done;
        this.modePaiement = modePaiement;
    }

 

 

    @Override
    public String toString() {
        return "Achat [id=" + id + ", user=" + user + ", produit=" + produit + ", quantite=" + quantite + ", done="
                + done + ", modePaiement=" + modePaiement + "]";
    }

 

 

    public Integer getId() {
        return id;
    }

 

 

    public User getUser() {
        return user;
    }

 

 

    public Produit getProduit() {
        return produit;
    }

 

 

    public Integer getQuantite() {
        return quantite;
    }

 

 

    public Boolean getDone() {
        return done;
    }

 

 

    public String getModePaiement() {
        return modePaiement;
    }

 

 

    public void setId(Integer id) {
        this.id = id;
    }

 

 

    public void setUser(User user) {
        this.user = user;
    }

 

 

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

 

 

    public void setQuantite(Integer quantite) {
        this.quantite = quantite;
    }

 

 

    public void setDone(Boolean done) {
        this.done = done;
    }

 

 

    public void setModePaiement(String modePaiement) {
        this.modePaiement = modePaiement;
    }
    
    
    }