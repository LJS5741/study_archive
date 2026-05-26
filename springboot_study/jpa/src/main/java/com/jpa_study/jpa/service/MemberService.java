package com.jpa_study.jpa.service;

import com.jpa_study.jpa.entity.Member; // Member Entity
import com.jpa_study.jpa.repository.MemberRepository; // DB 접근 Repository
import lombok.RequiredArgsConstructor; // final 필드 생성자 자동 생성
import org.springframework.stereotype.Service; // Service Bean 등록
import org.springframework.transaction.annotation.Transactional; // 트랜잭션 적용
import java.util.List; // 목록 반환

@Service // 비즈니스 로직 계층임을 의미
@RequiredArgsConstructor // memberRepository 생성자 주입 자동 생성
@Transactional // 클래스 전체에 트랜잭션 적용

public class MemberService {

    private final MemberRepository memberRepository; // DB 접근 담당

    public Member saveMember(String name, String email) { // DTO 없이 초반 흐름 학습
        if (memberRepository.existsByEmail(email)) { // 이메일 중복 검사
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다."); // 중복이면 예외
        }
        Member member = Member.createMember(name, email); // Entity 생성
        return memberRepository.save(member); // DB 저장 후 Entity 반환
    }

    @Transactional(readOnly = true) // 조회 전용 트랜잭션
    public Member findMember(Long id) { // 회원 단건 조회
        return memberRepository.findById(id) // PK로 조회
                .orElseThrow(() -> new IllegalArgumentException("회원이 없습니다.")); // 없으면 예외
    }

    @Transactional(readOnly = true) // 조회 전용
    public List<Member> findAllMembers() { // 전체 회원 조회
        return memberRepository.findAll(); // SELECT 전체 조회
    }

    public Member updateMemberName(Long id, String name) { // 회원 이름 수정
        Member member = findMember(id); // 영속 상태 Entity 조회
        member.changeName(name); // 값 변경. 트랜잭션 종료 시 UPDATE
        return member; // 수정된 Entity 반환

    }

    public void deleteMember(Long id) { // 회원 삭제
        Member member = findMember(id); // 삭제 대상 조회
        memberRepository.delete(member); // DELETE 실행 대상 등록
    }
}

