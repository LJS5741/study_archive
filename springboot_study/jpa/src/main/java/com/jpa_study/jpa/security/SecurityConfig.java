package com.jpa_study.jpa.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // 비밀번호 암호화 방식
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable()) // Postman 테스트 편의를 위해 CSRF 비활성화

                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.POST, "/members").permitAll() // 회원가입 허용
                        .requestMatchers("/login", "/logout", "/error").permitAll() // 로그인/로그아웃 허용
                        .anyRequest().authenticated() // 나머지는 로그인 필요
                )

                .formLogin(form -> form
                        .loginProcessingUrl("/login") // 로그인 요청 URL
                        .usernameParameter("email") // 로그인 ID 파라미터명
                        .passwordParameter("password") // 비밀번호 파라미터명
                        .defaultSuccessUrl("/auth/me", true) // 로그인 성공 후 이동
                        .permitAll()
                )

                .logout(logout -> logout
                        .logoutUrl("/logout") // 로그아웃 요청 URL
                        .logoutSuccessUrl("/login?logout") // 로그아웃 성공 후 이동
                        .invalidateHttpSession(true) // 세션 제거
                        .deleteCookies("JSESSIONID") // 쿠키 제거
                        .permitAll()
                );

        return http.build();
    }
}