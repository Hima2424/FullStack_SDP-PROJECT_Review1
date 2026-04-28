package com.example.feedbackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.example.feedbackbackend.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

    List<Feedback> findByTeacherId(int teacherId);

}