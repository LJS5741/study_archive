package com.jpa_study.jpa.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/auth/me")
    public String me(Authentication authentication) {

        if (authentication == null) {
            return "로그인하지 않았습니다.";
        }

        return "현재 로그인 사용자: " + authentication.getName();
    }
}