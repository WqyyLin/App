package com.team.mapper;

import com.team.entity.Rent;
import org.apache.ibatis.annotations.*;

import java.time.LocalDateTime;
import java.util.List;

public interface RentMapper {

    @Select("SELECT count(facility) FROM rent where time between #{firstRentTime} and #{LastRentTime}")
    Integer selectTotalUsedFacilityNumber(@Param("firstRentTime") LocalDateTime firstRentTime, @Param("LastRentTime") LocalDateTime LastRentTime);

    @Select("SELECT limitTime FROM rent where rid = #{rid}")
    LocalDateTime selectRentTimeByRid(@Param("rid") Integer rid);

    @Select("SELECT money FROM rent where rid = #{rid}")
    Integer selectRentMoneyByRid(@Param("rid") Integer rid);

    /**
     * 查找单个使用者使用的所有预约信息
     */
    @Select("SELECT * FROM team.rent where email=#{email} ")
    List<Rent> selectRentsByEmail(@Param("email") String email);

    @Select("SELECT count(distinct(email)) FROM rent where rentTime between #{time1} AND #{time2}")
    Integer selectRentPeopleNumber(@Param("time1") LocalDateTime time1, @Param("time2") LocalDateTime time2);

    @Select("SELECT sum(money) FROM rent WHERE rentTime between #{firstRentTime} and #{lastRentTime}")
    Integer selectDayMoney(@Param("firstRentTime") LocalDateTime firstRentTime, @Param("lastRentTime") LocalDateTime lastRentTime);

    @Select("SELECT count(*) FROM rent where facility = #{name} and limitTime > #{limitTime}")
    Integer selectRentsByNameAndTime(@Param("name") String name, @Param("limitTime") LocalDateTime limitTime);

    /**
     * 查询所有rent
     */
    @Select("SELECT * FROM rent")
    List<Rent> selectAll();

    /**
     * 通过邮箱计算某个用户所有rent的消费
     */
    @Select("SELECT * FROM team.rent where email=#{email} and time >= #{time}")
    Integer selectMoneyByUserEmail(@Param("email") String email, @Param("time") LocalDateTime time);

    @Update("UPDATE rent SET facility=#{facility}, activity=#{activity}, time=#{startTime}, limitTime=#{endTime} WHERE rid=#{rid}")
    void updateRentInfo(@Param("facility") String facility, @Param("activity") String activity,
                        @Param("startTime") LocalDateTime startTime, @Param("endTime") LocalDateTime endTime, @Param("rid") Integer rid);

    /**
     * 通过邮箱删除某个用户所有rent
     */
    @Delete("DELETE FROM rent where email=#{email}")
    void deleteRentsByUserEmail(@Param("email") String email);

    /**
     * 删除单个rent
     */
    @Delete("DELETE FROM rent WHERE rid = #{rid}")
    void deleteRentByRid(@Param("rid") Integer rid);

    @Delete("DELETE FROM rent Where facility = #{name}")
    void deleteRentsByName(@Param("name") String name);

}
