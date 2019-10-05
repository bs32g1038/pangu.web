import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LikeSvg from '../../components/svgs/like';
import ReplySvg from '../../components/svgs/reply';

const ReplyWrap = styled.div``;

const ReplyInnerHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 15px;
    border-bottom: 1px solid #efefef;
    padding-bottom: 15px;
`;

const ReplyList = styled.div``;

const ReplyListItem = styled.div`
    display: flex;
`;

const UserAvatar = styled(Link)`
    width: 40px;
    height: 40px;
    border-radius: 3px;
`;

const ReplyContent = styled.div`
    width: 100%;
    margin-left: 10px;
`;

const ReplyInfo = styled.div`
    display: flex;
    align-items: center;
`;

const BaseInfo = styled.div`
    flex: 1 0 auto;
    a {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
    }
    .reply-author {
        font-weight: 700;
        margin-right: 5px;
    }
    .reply-time {
        font-size: 13px;
    }
`;
const UserAction = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    .like-action {
        display: block;
        cursor: pointer;
    }
    .reply-action,
    .like-action {
        margin-left: 7px;
        border: 1px solid #ccc;
        cursor: pointer;
        padding: 2px 5px;
        border-radius: 4px;
        font-size: 12px;
        svg {
            width: 14px;
        }
    }
`;

const MarkdownText = styled.div`
    font-size: 14px;
`;

export default props => {
    const comments = props.comments;
    const topic = props.topic;
    return (
        <ReplyWrap>
            <ReplyInnerHeader>
                <span>共收到 {topic.replyCount} 条回复</span>
            </ReplyInnerHeader>
            <ReplyList id="5d6cb2c8d50f572345910d05">
                <ReplyListItem>
                    <UserAvatar to="/user/PanZhangOne">
                        <img
                            src="https://avatars2.githubusercontent.com/u/20785938?v=4&amp;s=120"
                            title="PanZhangOne"
                        />
                    </UserAvatar>
                    <ReplyContent>
                        <ReplyInfo>
                            <BaseInfo>
                                <a className="reply-author" href="/user/PanZhangOne">
                                    PanZhangOne
                                </a>
                                <a className="reply-time" href="#5d6cb2c8d50f572345910d05">
                                    1楼•3 小时前
                                </a>
                            </BaseInfo>
                            <UserAction>
                                <span className="like-action">
                                    <LikeSvg></LikeSvg>
                                    <span className="up-count">10</span>
                                </span>
                                <span className="reply-action">
                                    <ReplySvg></ReplySvg>
                                    回复
                                </span>
                            </UserAction>
                        </ReplyInfo>
                        <MarkdownText>
                            <p>弱类型语言, JS的class是基于原型的, 和Java的class不太一样</p>
                        </MarkdownText>
                    </ReplyContent>
                </ReplyListItem>
            </ReplyList>
        </ReplyWrap>
    );
};
