package com.example.feedbackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.feedbackbackend.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);

}