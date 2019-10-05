import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const UserInfoWrap = styled.div`
    position: relative;
    line-height: 20px;
    padding: 15px 15px 15px 75px;
    font-size: 13px;
    background-color: #f8f8f8;
    color: #999;
`;

const Avatar = styled(Link)`
    position: absolute;
    left: 15px;
    top: 15px;
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
    > span {
        padding-right: 10px;
        color: #ff7200;
    }
`;

const FollowBtn = styled(Button)`
    &.MuiButton-root {
        font-size: 13px;
        position: absolute;
        right: 10px;
        top: 21px;
    }
`;

export default props => {
    const user = props.user;
    return (
        <UserInfoWrap>
            <Avatar to={`/user/${user.id}`}>
                <img src={user.avatar} alt={user.username} />
            </Avatar>
            <Info>
                <Detail>
                    <Link to={`/user/${user.id}`} className="fly-link">
                        <cite>{user.username}</cite>
                    </Link>
                    <span>积分：{user.score}</span>
                </Detail>
                <Signature>
                    <span>{user.signature}</span>
                </Signature>
            </Info>
            <FollowBtn variant="outlined" color="primary" size="small">
                关注
            </FollowBtn>
        </UserInfoWrap>
    );
};
