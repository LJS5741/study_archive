package com.human.middle.controller;

import com.human.middle.service.MemberService;
import com.human.middle.service.MemberService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
  private final MemberService memberService;

  // 회원가입
  @PostMapping("/register")
  public ResponseEntity<?> register(@Valid @RequestBody MemberRegReq req) {
      memberService.register(req);
      return ResponseEntity.ok("회원 가입 성공");
  
  }

  // 로그인
  @PostMapping("/login")
  public ResponseEntity<?> login(@Valid @RequestBody LoginReq req) {
      // 로그인 로직 구현 (예: JWT 토큰 발급)
      return ResponseEntity.ok("로그인 성공");
  }

  // 회원 전체 조회
  @GetMapping("/members")
  public ResponseEntity<List<MemberRes>> getAllMembers() {
      List<MemberRes> members = memberService.getAllMembers();
      return ResponseEntity.ok(members);
  }
}