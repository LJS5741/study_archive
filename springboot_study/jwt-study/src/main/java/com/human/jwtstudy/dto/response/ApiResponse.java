package com.human.jwtstudy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 공통 응답 형식.
 * Controller 응답 모양을 일정하게 만들기 위해 사용합니다.
 */
@Getter
@AllArgsConstructor
public class ApiResponse<T> {

    private boolean success;
    private String message;
    private T data;

    public static <T> ApiResponse<T> ok(T data) {
        return new ApiResponse<>(true, "OK", data);
    }

    public static <T> ApiResponse<T> ok(String message, T data) {
        return new ApiResponse<>(true, message, data);
    }
}
