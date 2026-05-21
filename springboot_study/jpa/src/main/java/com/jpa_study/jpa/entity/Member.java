package com.jpa_study.jpa.entity;

import jakarta.persistence.*; // JPA 어노테이션 사용
import lombok.Getter; // getter 자동 생성
import lombok.NoArgsConstructor; // 기본 생성자 자동 생성
@Entity // 이 클래스가 JPA Entity임을 의미
@Table(name = "members") // DB 테이블명을 members로 지정
@Getter // 모든 필드의 getter 생성
@NoArgsConstructor(access = lombok.AccessLevel.PROTECTED) // JPA용 기본 생성자. 외부 new 남용 방지
public class Member {
    @Id // 기본키(PK)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "member_seq_gen") // Oracle 시퀀스 전략
    @SequenceGenerator(
            name = "member_seq_gen", // JPA 내부에서 사용할 generator 이름
            sequenceName = "MEMBERS_SEQ", // DB에 존재하거나 생성될 시퀀스 이름
            allocationSize = 1 // DB 시퀀스 INCREMENT BY 1과 맞춤
    )
    private Long id; // 회원 고유 번호
    @Column(nullable = false, length = 50) // NOT NULL, 최대 길이 50
    private String name; // 회원 이름
    @Column(nullable = false, unique = true, length = 100) // NOT NULL + 중복 불가
    private String email; // 회원 이메일
    private Member(String name, String email) { // 생성 규칙을 Entity 내부로 모음
        this.name = name; // 이름 초기화
        this.email = email; // 이메일 초기화
    }
    public static Member createMember(String name, String email) { // 의미 있는 생성 메서드
        return new Member(name, email); // 올바른 방식으로 Member 생성
    }
    public void changeName(String name) { // 이름 변경 기능
        this.name = name; // 트랜잭션 안에서는 변경 감지 대상
    }
}