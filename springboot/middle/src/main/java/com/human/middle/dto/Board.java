package com.human.middle.dto;
import lombok.Data;

import java.time.LocalDateTime;

public class Board {
    private Long id;
    private String title;
    private String content;
    private String memberId;
    private int viewCount;
    private LocalDateTime creatAt;
}


