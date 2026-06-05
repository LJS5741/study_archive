package com.human.jwtstudy.dto.response;

import com.human.jwtstudy.constant.Authority;
import com.human.jwtstudy.entity.Member;
import lombok.Builder;
import lombok.Getter;

/**
 * 회원 응답 DTO.
 * 비밀번호는 절대 응답에 포함하지 않습니다.
 */
@Getter
@Builder
public class MemberResDto {

    private Long id;
    private String email;
    private String name;
    private Authority authority;

    public static MemberResDto from(Member member) {
        return MemberResDto.builder()
                .id(member.getId())
                .email(member.getEmail())
                .name(member.getName())
                .authority(member.getAuthority())
                .build();
    }
}
