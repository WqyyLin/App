package com.team.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Facility {

    private Integer fid;
    private String name;
    private Integer capacity;
    private Integer facilitiesNumber;
    private String title;
    private String description;
    private Integer isValid;
    private Integer num;
}
