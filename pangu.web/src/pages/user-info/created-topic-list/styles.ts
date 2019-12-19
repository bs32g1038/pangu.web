import styled from 'styled-components';

export const ReplyTopicListWrap = styled.div`
    padding: 0 20px 20px;
    background-color: #fff;
    border-top: 1px solid #f0f0f0;
`;

export const ReplySign = styled.div`
    padding: 20px 0;
    background-color: #fff;
    span {
        color: #3f51b5;
    }
    a {
        color: #3f51b5;
    }
`;

export const Cell = styled.div`
    padding-right: 10px;
    background: #fff;
    display: flex;
    width: 100%;
    position: relative;
    padding: 20px;
    font-size: 14px;
    border-left: 2px solid #ccc;
    background-color: #f5f5f5;
    .last-time {
        text-align: right;
        margin-right: 10px;
    }
    .author {
        margin-right: 10px;
    }
    .time {
        flex: 1 0 auto;
    }
    .comment-num {
        color: rgba(0, 0, 0, 0.65);
        text-align: right;
        margin-right: 10px;
    }
`;

export const UserAvatar = styled.a`
    margin-right: 8px;
    max-width: 40px;
    min-width: 40px;
    img {
        width: 40px;
        height: 40px;
        border-radius: 3px;
    }
`;

export const CellContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
`;

export const Sign = styled.div`
    border: 1px solid #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
    display: block;
`;

export const CellHeader = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    ${Sign} + ${Sign} {
        margin-left: 10px;
    }
`;

export const TopicTitleWrap = styled.div`
    flex: 1 0 auto;
    width: 0;
`;

export const TopicTitleA = styled.a`
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    font-size: 16px;
    line-height: 30px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.85);
    margin-left: 10px;
    text-overflow: ellipsis;
    margin-right: 10px;
    cursor: pointer;
`;

export const CellBottom = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.8em;
    color: rgba(0, 0, 0, 0.45);
`;

export const UserSmallAvatar = styled.img`
    height: 18px;
    width: 18px;
    vertical-align: middle;
    margin-right: 0.5em;
    border-radius: 3px;
`;
