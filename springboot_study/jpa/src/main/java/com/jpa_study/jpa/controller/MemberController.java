package com.jpa_study.jpa.controller;

import com.jpa_study.jpa.dto.MemberCreateRequest;
import com.jpa_study.jpa.dto.MemberResponse;
import com.jpa_study.jpa.dto.MemberUpdateRequest;
import com.jpa_study.jpa.entity.Member;
import com.jpa_study.jpa.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping // 회원가입: 로그인 없이 접근 허용 예정
    public MemberResponse createMember(@RequestBody MemberCreateRequest request) {

        Member member = memberService.saveMember(
                request.getName(),
                request.getEmail(),
                request.getPassword()
        );

        return new MemberResponse(member);
    }

    @GetMapping("/{id}")
    public MemberResponse findMember(@PathVariable Long id) {
        return new MemberResponse(memberService.findMember(id));
    }

    @GetMapping
    public List<MemberResponse> findAllMembers() {
        return memberService.findAllMembers()
                .stream()
                .map(MemberResponse::new)
                .toList();
    }

    @PutMapping("/{id}")
    public MemberResponse updateMember(@PathVariable Long id,
                                       @RequestBody MemberUpdateRequest request) {
        return new MemberResponse(
                memberService.updateMemberName(id, request.getName())
        );
    }

    @DeleteMapping("/{id}")
    public String deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
        return "삭제 완료";
    }
}