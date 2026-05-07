package com.human.middle.service;
// Request DTO -> Entity -> DAO
// Entity -> Reponse DTO -> Controller

import com.human.middle.dao.MemberDao;
import com.human.middle.dto.request.MemberRegReq;
import com.human.middle.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberDao memberDao;

    @Transactional
    public void register(MemberRegReq req) {
        // 1. 회원 중복 여부 확인
        if (memberDao.isDuplicate(req.getUsername())) {
            throw new IllegalArgumentException("이미 존재하는 사용자입니다.");
        }

        // 2. DTO -> Entity 변환
        Member member = req.toEntity();

        // 3. 회원 정보 저장
        boolean success = memberDao.save(member);
        if (!success) {
            throw new RuntimeException("회원 가입에 실패했습니다.");
        }
    }
}