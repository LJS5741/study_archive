package com.human.middle.dto.request;
// 회원 가입 요청

import lombok.Data;

@Data
puglic class MemberReqReq {
    private String username;
    private String password;
    private String nickname;
    
    // Emtity로 반환하는 메시지
    Member member toEntity( {
        Member member = new Member();
        member.setUsername(this.username);
        member.setPassword(this.password);
        member.setNickname(this.nickname);
        member.setRole("USER"); // 기본 역할 설정
        return member;
    })
}