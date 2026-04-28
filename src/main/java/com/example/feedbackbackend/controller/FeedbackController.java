package com.example.feedbackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.feedbackbackend.entity.Feedback;
import com.example.feedbackbackend.repository.FeedbackRepository;

@RestController
@RequestMapping("/feedback")
@CrossOrigin
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepo;

    // ✅ Student submits feedback
    @PostMapping
    public String submitFeedback(@RequestBody Feedback feedback) {
        feedbackRepo.save(feedback);
        return "Feedback Submitted Successfully!";
    }

    // ✅ Teacher sees only their feedback
    @GetMapping("/teacher/{id}")
    public List<Feedback> getTeacherFeedback(@PathVariable int id) {
        return feedbackRepo.findByTeacherId(id);
    }

    // ✅ Admin sees all feedback
    @GetMapping
    public List<Feedback> getAllFeedback() {
        return feedbackRepo.findAll();
    }
}