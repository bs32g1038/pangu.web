import styled from 'styled-components';

export const Wrap = styled.div`
    width: 812px;
    margin: 0 auto;
    flex: 1 0 auto;
    padding: 20px;
    background-color: #fff;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.85);
    margin-top: 0;
    margin-bottom: 0;
    flex: 1 0 auto;
`;

export const Meta = styled.div`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
`;

export const MetaBaseInfo = styled.div`
    flex: 1 0 auto;
    > span {
        margin-right: 10px;
    }
`;

export const MetaReaction = styled.div`
    display: flex;
    align-items: center;
`;

export const CollectCountWrap = styled.div`
    display: flex;
    flex: 1 0 auto;
    margin-right: 20px;
    cursor: pointer;
    .icon {
        width: 20px;
        height: 20px;
    }
`;

export const LikeCountWrap = styled.div`
    display: flex;
    flex: 1 0 auto;
    margin-right: 20px;
    cursor: pointer;
    .icon {
        width: 20px;
        height: 20px;
    }
`;

export const Hr = styled.hr`
    height: 1px;
    background-color: #f5f5f5;
    border: none;
`;

export const MarkdownBody = styled.div`
    min-height: 100px;
    padding-top: 7px;
`;
