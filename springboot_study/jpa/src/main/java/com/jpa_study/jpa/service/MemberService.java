package com.jpa_study.jpa.service;

import com.jpa_study.jpa.entity.Member;
import com.jpa_study.jpa.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;

    private final PasswordEncoder passwordEncoder; // 비밀번호 암호화 담당

    public Member saveMember(String name, String email, String password) {

        if (memberRepository.existsByEmail(email)) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        String encodedPassword = passwordEncoder.encode(password); // 비밀번호 암호화

        Member member = Member.createMember(name, email, encodedPassword); // 회원 Entity 생성

        return memberRepository.save(member); // DB 저장
    }

    @Transactional(readOnly = true)
    public Member findMember(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("회원이 없습니다."));
    }

    @Transactional(readOnly = true)
    public List<Member> findAllMembers() {
        return memberRepository.findAll();
    }

    public Member updateMemberName(Long id, String name) {
        Member member = findMember(id);
        member.changeName(name);
        return member;
    }

    public void deleteMember(Long id) {
        Member member = findMember(id);
        memberRepository.delete(member);
    }
}