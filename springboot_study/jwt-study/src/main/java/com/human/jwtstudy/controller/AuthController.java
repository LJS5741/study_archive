package com.human.jwtstudy.controller;

import com.human.jwtstudy.dto.request.SignUpReqDto;
import com.human.jwtstudy.dto.response.ApiResponse;
import com.human.jwtstudy.dto.response.MemberResDto;
import com.human.jwtstudy.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 인증 API Controller.
 * 현재 2단계에서는 회원가입 요청만 받습니다.
 */
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    /**
     * 회원가입 API.
     * POST /auth/signup 요청을 처리합니다.
     */
    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<MemberResDto>> signup(
            @RequestBody @Valid SignUpReqDto requestDto
    ) {
        MemberResDto response = authService.signup(requestDto);
        return ResponseEntity.ok(ApiResponse.ok("회원가입 성공", response));
    }
}
