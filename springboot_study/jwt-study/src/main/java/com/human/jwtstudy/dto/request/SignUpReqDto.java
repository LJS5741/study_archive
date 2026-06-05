package com.human.jwtstudy.dto.request;

import com.human.jwtstudy.constant.Authority;
import com.human.jwtstudy.entity.Member;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * 회원가입 요청 DTO.
 * 클라이언트가 보낸 JSON을 이 객체로 받습니다.
 */
@Getter
@Setter
@NoArgsConstructor
public class SignUpReqDto {

    @NotBlank(message = "이메일은 필수입니다.")
    @Email(message = "이메일 형식이 올바르지 않습니다.")
    private String email;

    @NotBlank(message = "비밀번호는 필수입니다.")
    private String password;

    @NotBlank(message = "이름은 필수입니다.")
    private String name;

    /**
     * 요청에서 권한을 안 보내면 일반 사용자로 가입시킵니다.
     */
    private Authority authority = Authority.ROLE_USER;

    /**
     * DTO -> Entity 변환.
     * 여기서 비밀번호를 반드시 암호화한 뒤 Member에 넣습니다.
     */
    public Member toEntity(PasswordEncoder passwordEncoder) {
        return Member.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
                .name(name)
                .authority(authority == null ? Authority.ROLE_USER : authority)
                .build();
    }
}
