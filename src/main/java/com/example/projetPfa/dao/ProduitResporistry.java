package com.example.projetPfa.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.projetPfa.entites.Produit;
@Repository
public interface ProduitResporistry  extends JpaRepository<Produit,Integer> {
	
	List<Produit> findByCategorieNom(String categorie);
	List<Produit> findByNomContains(String nom);
}
