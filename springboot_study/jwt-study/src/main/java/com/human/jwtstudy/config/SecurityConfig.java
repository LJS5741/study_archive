package com.human.jwtstudy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Spring Security 설정.
 * 현재 2단계에서는 /auth/signup 요청을 인증 없이 허용하고,
 * PasswordEncoder Bean을 등록하는 것이 핵심입니다.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /**
     * 비밀번호 암호화 도구.
     * 회원가입 시 원본 비밀번호를 BCrypt 해시로 바꿔 DB에 저장합니다.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * 보안 필터 체인 설정.
     * JWT 프로젝트이므로 서버 세션을 만들지 않는 STATELESS 구조로 시작합니다.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // REST API 학습용. 브라우저 폼 기반 CSRF 보호는 사용하지 않습니다.
                .csrf(csrf -> csrf.disable())

                // JWT 학습에서는 세션에 로그인 상태를 저장하지 않습니다.
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )

                // 회원가입 API는 로그인 전에도 호출해야 하므로 허용합니다.
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/signup").permitAll()
                        .anyRequest().authenticated()
                )

                // 기본 로그인 화면과 Basic 인증은 JWT 학습 흐름에서 사용하지 않습니다.
                .formLogin(form -> form.disable())
                .httpBasic(basic -> basic.disable());

        return http.build();
    }
}
