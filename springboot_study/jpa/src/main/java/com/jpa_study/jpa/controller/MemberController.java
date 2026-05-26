package com.jpa_study.jpa.controller;

import com.jpa_study.jpa.dto.MemberCreateRequest; // 회원 생성 요청 DTO
import com.jpa_study.jpa.dto.MemberResponse; // 회원 응답 DTO
import com.jpa_study.jpa.dto.MemberUpdateRequest; // 회원 수정 요청 DTO
import com.jpa_study.jpa.entity.Member; // Member Entity
import com.jpa_study.jpa.service.MemberService; // 비즈니스 로직 처리

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // REST API Controller
@RequestMapping("/members") // 기본 URL: /members
@RequiredArgsConstructor // 생성자 자동 생성
public class MemberController {

    private final MemberService memberService; // Service 주입


    @PostMapping // POST /members
    public MemberResponse createMember(
            @RequestBody MemberCreateRequest request // 요청 JSON 받기
    ) {

        // 회원 저장
        Member member = memberService.saveMember(
                request.getName(),
                request.getEmail()
        );

        // DTO로 변환 후 반환
        return new MemberResponse(member);
    }


    @GetMapping("/{id}") // GET /members/{id}
    public MemberResponse findMember(

            @PathVariable Long id // URL의 id 값 받기
    ) {

        // 회원 조회 후 DTO 반환
        return new MemberResponse(
                memberService.findMember(id)
        );
    }


    @GetMapping // GET /members
    public List<MemberResponse> findAllMembers() {

        return memberService.findAllMembers()

                .stream() // List 순회

                .map(MemberResponse::new) // Entity → DTO 변환

                .toList(); // List로 변환
    }


    @PutMapping("/{id}") // PUT /members/{id}
    public MemberResponse updateMember(

            @PathVariable Long id, // 수정할 회원 id

            @RequestBody MemberUpdateRequest request // 수정 요청 데이터
    ) {

        // 이름 수정 후 DTO 반환
        return new MemberResponse(
                memberService.updateMemberName(
                        id,
                        request.getName()
                )
        );
    }


    @DeleteMapping("/{id}") // DELETE /members/{id}
    public String deleteMember(

            @PathVariable Long id // 삭제할 회원 id
    ) {

        // 회원 삭제
        memberService.deleteMember(id);

        return "삭제 완료";
    }
}