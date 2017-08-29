package org.remix.ssm.test;

import org.junit.Test;
import org.remix.ssm.mapper.UserMapper;
import org.remix.ssm.domain.UserEntity;

import javax.annotation.Resource;
import java.util.List;

public class UserEntityTest extends SpringTestCase {
    @Resource
    private UserMapper userDaoMapper;

    @Test
    public void selectAllUser(){
        List<UserEntity> userEntities = userDaoMapper.getAllUser();
        System.out.println(userEntities);
    }
}
