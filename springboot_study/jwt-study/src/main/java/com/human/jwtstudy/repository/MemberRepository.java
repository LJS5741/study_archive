package com.human.jwtstudy.repository;

import com.human.jwtstudy.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * member 테이블에 접근하는 Repository.
 * Service는 DB를 직접 다루지 않고 Repository를 통해 접근합니다.
 */
public interface MemberRepository extends JpaRepository<Member, Long> {

    /**
     * 로그인 단계에서 사용할 예정입니다.
     * email로 회원을 찾습니다.
     */
    Optional<Member> findByEmail(String email);

    /**
     * 회원가입 단계에서 사용합니다.
     * 같은 email이 이미 존재하는지 확인합니다.
     */
    boolean existsByEmail(String email);
}
