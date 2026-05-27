package com.jpa_study.jpa.security;

import com.jpa_study.jpa.entity.Member;
import com.jpa_study.jpa.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("회원을 찾을 수 없습니다."));

        return User.builder()
                .username(member.getEmail()) // 로그인 ID
                .password(member.getPassword()) // 암호화된 비밀번호
                .authorities(member.getRole()) // 권한
                .build();
    }
}