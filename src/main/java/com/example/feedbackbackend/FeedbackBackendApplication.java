package com.example.feedbackbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.feedbackbackend.repository")
public class FeedbackBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(FeedbackBackendApplication.class, args);
    }

}