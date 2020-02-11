import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import LikeSvg from '../../components/svgs/like';
import ReplySvg from '../../components/svgs/reply';
// import Vditor from 'vditor';
// import 'vditor/src/assets/scss/classic.scss';
import { timeAgo } from '../../libs/time';
// import * as markdown from '../../libs/markdown';
import { MarkdownBody } from './style';
import marked from '../../libs/marked';

const ReplyWrap = styled.div`
    padding-top: 60px;
`;

const ReplyInnerHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    border-bottom: 2px solid #efefef;
    padding-bottom: 15px;
`;

const ReplyList = styled.div`
    min-height: 20px;
`;

const ReplyListItem = styled.div`
    display: flex;
    position: relative;
    padding: 20px;
    /* &:first-child {
        padding-top: 0;
    } */
`;

const UserAvatar = styled.a`
    width: 32px;
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    img {
        border-radius: 50%;
        overflow: hidden;
        line-height: 1;
        vertical-align: middle;
        width: 100%;
    }
`;

const ReplyContent = styled.div`
    width: 100%;
    position: relative;
`;

const ReplyInfo = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    padding-left: 16px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
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
    .author-label {
        padding: 2px 4px;
        margin-left: 8px;
        font-size: 12px;
        cursor: default;
        border: 1px solid rgba(27, 31, 35, 0.15);
        border-radius: 3px;
    }
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
        color: rgba(0, 0, 0, 0.65);
        svg {
            width: 14px;
            margin-right: 2px;
        }
    }
`;

const MarkdownText = styled(MarkdownBody)`
    font-size: 14px;
    padding: 15px;
    background-color: #fff;
    margin-bottom: 0;
`;

const MarkdownEditor = styled.div`
    margin-bottom: 20px;
`;

const SubmitButton = styled(Button)`
    float: right;
`;

// const initEditor = () => {
//     const vditor = new Vditor('markdownEditor', {
//         height: 200,
//         preview: {
//             mode: 'editor',
//         },
//         placeholder: '请输入正文',
//     });
//     vditor.setValue('');
//     return vditor;
// };

export default props => {
    const replyList = props.replyList;
    const topic = props.topic;
    // useEffect(() => {
    //     const vditor = initEditor();
    // }, [1]);
    return (
        <ReplyWrap>
            <ReplyInnerHeader>
                <span>共计 {replyList.count} 条评论</span>
            </ReplyInnerHeader>
            <ReplyList>
                {replyList.rows.map(item => (
                    <ReplyListItem key={item.id}>
                        <Link href={`/user/${item.user && item.user.id}`} passHref={true}>
                            <UserAvatar>
                                <img src={item.user && item.user.avatar} title={item.user && item.user.username} />
                            </UserAvatar>
                        </Link>
                        <ReplyContent>
                            <ReplyInfo>
                                <BaseInfo>
                                    <Link href={`/user/${item.user && item.user.id}`}>
                                        <a className="reply-author">{item.user && item.user.username}</a>
                                    </Link>
                                    <a className="reply-time">在 {timeAgo(item.createdAt)} 评论</a>
                                </BaseInfo>
                            </ReplyInfo>
                            <MarkdownText
                                className="vditor-reset"
                                dangerouslySetInnerHTML={{ __html: marked(item.content) }}
                            ></MarkdownText>
                            <UserAction>
                                {topic.user && item.user && topic.user.id === item.user.id && (
                                    <span className="author-label">作者</span>
                                )}
                                <IconButton className="like-action">
                                    <LikeSvg></LikeSvg>
                                    <span className="up-count">{item.like}</span>
                                </IconButton>
                                <IconButton className="reply-action">
                                    <ReplySvg></ReplySvg>
                                    回复
                                </IconButton>
                            </UserAction>
                        </ReplyContent>
                    </ReplyListItem>
                ))}
            </ReplyList>
            {/* <MarkdownEditor id="markdownEditor"></MarkdownEditor> */}
            {/* <SubmitButton size="small" variant="outlined" color="primary">
                提交
            </SubmitButton> */}
        </ReplyWrap>
    );
};
