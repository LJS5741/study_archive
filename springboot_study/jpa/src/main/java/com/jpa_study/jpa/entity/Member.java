package com.jpa_study.jpa.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "members")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "member_seq_gen")
    @SequenceGenerator(
            name = "member_seq_gen",
            sequenceName = "MEMBERS_SEQ",
            allocationSize = 1
    )
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false)
    private String password; // 암호화된 비밀번호 저장

    @Column(nullable = false, length = 20)
    private String role; // USER, ADMIN 같은 권한

    private Member(String name, String email, String password, String role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public static Member createMember(String name, String email, String encodedPassword) {
        return new Member(name, email, encodedPassword, "ROLE_USER");
    }

    public void changeName(String name) {
        this.name = name;
    }
}