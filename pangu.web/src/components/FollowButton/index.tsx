import React, { useState } from 'react';
import { follow, cancelFollow } from '../../api/follow';
import Button from '@material-ui/core/Button';
import { getUserInfoFromCookie, isLogin } from '../../utils/auth';

export default props => {
    const userInfo = getUserInfoFromCookie();
    let { userId, followUserId } = props;
    if (userId) {
        followUserId = userInfo.id;
    } else if (followUserId) {
        userId = userInfo.id;
    }
    if (isLogin() && userId === followUserId) {
        return null;
    }
    const [isFollow, setIsFollow] = useState(props.isFollow);
    return (
        <Button
            variant="outlined"
            size="small"
            color={isFollow ? 'secondary' : 'primary'}
            onClick={() => {
                if (isFollow) {
                    return cancelFollow({
                        userId,
                        followUserId,
                    }).then(res => {
                        setIsFollow(false);
                    });
                }
                follow({
                    userId,
                    followUserId,
                }).then(res => {
                    setIsFollow(true);
                });
            }}
        >
            {isFollow ? '取消关注' : '关注'}
        </Button>
    );
};
