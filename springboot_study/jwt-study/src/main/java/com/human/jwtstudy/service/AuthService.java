package com.human.jwtstudy.service;

import com.human.jwtstudy.dto.request.SignUpReqDto;
import com.human.jwtstudy.dto.response.MemberResDto;
import com.human.jwtstudy.entity.Member;
import com.human.jwtstudy.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 인증 관련 비즈니스 로직을 처리하는 Service.
 * 현재 2단계에서는 회원가입만 담당합니다.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * 회원가입 처리.
     * 요청 DTO를 받아서 중복 확인, 비밀번호 암호화, DB 저장을 수행합니다.
     *
     * @param requestDto 회원가입 요청 데이터
     * @return 저장된 회원의 응답 DTO. 비밀번호는 포함하지 않습니다.
     */
    public MemberResDto signup(SignUpReqDto requestDto) {
        // 1. 이메일 중복 확인
        if (memberRepository.existsByEmail(requestDto.getEmail())) {
            throw new IllegalArgumentException("이미 가입된 이메일입니다.");
        }

        // 2. 요청 DTO를 Entity로 변환. 이때 비밀번호가 BCrypt로 암호화됩니다.
        Member member = requestDto.toEntity(passwordEncoder);

        // 3. Entity를 DB에 저장합니다.
        Member savedMember = memberRepository.save(member);

        // 4. 저장된 Entity를 응답 DTO로 변환해서 반환합니다.
        return MemberResDto.from(savedMember);
    }
}
