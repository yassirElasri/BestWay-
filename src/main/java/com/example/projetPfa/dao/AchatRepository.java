package com.example.projetPfa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projetPfa.entites.Achat;

@Repository
public interface AchatRepository extends JpaRepository<Achat,Integer>{

}
