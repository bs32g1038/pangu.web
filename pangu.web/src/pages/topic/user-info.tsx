import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { USER_DEFAULT_SIGNATUR } from '../../configs/constant';

const UserInfoWrap = styled.div`
    position: relative;
    line-height: 20px;
    padding: 10px 15px 10px 75px;
    font-size: 13px;
    background-color: #f5f5f5;
    color: #999;
`;

const Avatar = styled.a`
    position: absolute;
    left: 15px;
    top: 10px;
    img {
        display: block;
        width: 45px;
        height: 45px;
        margin: 0;
        border-radius: 2px;
    }
`;

const Info = styled.div``;

const Detail = styled.div`
    white-space: nowrap;
    overflow: hidden;
    a {
        padding-right: 10px;
        font-size: 14px;
    }
`;

const Signature = styled.div`
    margin-top: 3px;
    > span {
        padding-right: 10px;
        color: #ff7200;
    }
`;

const FollowBtn = styled(Button)`
    &.MuiButton-root {
        font-size: 13px;
        position: absolute;
        right: 15px;
        top: 16px;
    }
`;

export default props => {
    const user = props.user;
    return (
        <UserInfoWrap>
            <Avatar to={`/user/${user.account}`}>
                <img src={user.avatar} alt={user.username} />
            </Avatar>
            <Info>
                <Detail>
                    <Link href={`/user/${user.id}`}>
                        <a href="" className="fly-link">
                            <cite>{user.username}</cite>
                        </a>
                    </Link>
                    <span>积分：{user.score}</span>
                </Detail>
                <Signature>
                    <span>{user.signature || USER_DEFAULT_SIGNATUR}</span>
                </Signature>
            </Info>
            <FollowBtn variant="outlined" color="primary" size="small">
                关注
            </FollowBtn>
        </UserInfoWrap>
    );
};
