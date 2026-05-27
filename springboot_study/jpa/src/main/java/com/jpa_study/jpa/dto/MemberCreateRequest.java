package com.jpa_study.jpa.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberCreateRequest {

    private String name; // 회원 이름

    private String email; // 로그인 ID로 사용할 이메일

    private String password; // 로그인에 사용할 비밀번호
}