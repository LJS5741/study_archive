package com.human.jwtstudy.entity;

import com.human.jwtstudy.constant.Authority;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 회원 Entity.
 * JPA가 member 테이블과 연결해서 관리합니다.
 */
@Entity
@Table(name = "member")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    /**
     * 회원 PK.
     * MySQL 기준 AUTO_INCREMENT와 연결됩니다.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    /**
     * 로그인에 사용할 이메일.
     * 같은 이메일로 중복 가입하지 못하게 unique 설정을 둡니다.
     */
    @Column(nullable = false, unique = true, length = 100)
    private String email;

    /**
     * 암호화된 비밀번호.
     * 원본 비밀번호를 저장하면 안 됩니다.
     */
    @Column(nullable = false)
    private String password;

    /**
     * 사용자 이름 또는 닉네임.
     */
    @Column(nullable = false, length = 50)
    private String name;

    /**
     * 사용자 권한.
     * EnumType.STRING을 사용해야 DB에 ROLE_USER처럼 문자열로 저장됩니다.
     */
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private Authority authority;

    @Builder
    public Member(String email, String password, String name, Authority authority) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.authority = authority;
    }
}
