package com.example.projetPfa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projetPfa.entites.Categorie;


@Repository
public interface CategorieResporistry  extends JpaRepository<Categorie,Integer> {

}

