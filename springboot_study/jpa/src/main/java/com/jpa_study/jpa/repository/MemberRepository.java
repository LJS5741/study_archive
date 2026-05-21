package com.jpa_study.jpa.repository;

import com.jpa_study.jpa.entity.Member; // Member Entity 사용
import org.springframework.data.jpa.repository.JpaRepository; // Spring Data JPA 기본 Repository
import java.util.Optional; // 값이 없을 수 있는 조회 결과 표현

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByEmail(String email); // email 컬럼으로 회원 조회

    boolean existsByEmail(String email); // email 중복 여부 확인
}