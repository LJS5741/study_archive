package com.human.jwtstudy.constant;

/**
 * 회원 권한.
 * JWT 단계에서는 이 권한이 토큰 안에 들어가고,
 * 나중에 인가(Authorization) 판단에 사용됩니다.
 */
public enum Authority {
    ROLE_USER,
    ROLE_ADMIN
}
