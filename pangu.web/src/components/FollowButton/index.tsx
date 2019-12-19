import React, { useState } from 'react';
import { follow, cancelFollow } from '../../api/follow';
import Button from '@material-ui/core/Button';

export default props => {
    const { userId, followUserId } = props;
    const [_isFollow, setIsFollow] = useState(false);
    const isFollow = _isFollow || props.isFollow;
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
