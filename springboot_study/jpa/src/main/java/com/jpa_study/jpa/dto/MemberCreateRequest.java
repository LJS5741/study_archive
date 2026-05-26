package com.jpa_study.dto;

import lombok.Getter; // getter 생성
import lombok.NoArgsConstructor; // JSON 역직렬화를 위한 기본 생성자

@Getter
@NoArgsConstructor

public class MemberCreateRequest {

    private String name; // 요청으로 받을 회원 이름
    private String email; // 요청으로 받을 이메일

}

