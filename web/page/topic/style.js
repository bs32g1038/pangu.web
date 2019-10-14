import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import deepOrange from '@material-ui/core/colors/deepOrange';
import grey from '@material-ui/core/colors/grey';

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

export const CollectCountWrap = styled(IconButton)`
    &.MuiIconButton-root {
        font-size: 14px;
        border-radius: 4px;
        padding: 5px 8px;
        margin-right: 10px;
    }
    .icon {
        width: 20px;
        height: 20px;
    }
`;

export const LikeCountWrap = styled(CollectCountWrap)`
    .icon {
        margin-right: 2px;
    }
`;

export const MarkdownBody = styled.div`
    min-height: 100px;
    padding-top: 1.5em;
    font-size: 14px;
`;

export const RecruitInfoWrap = styled.div``;

export const RecruitInfoSign = styled.h2`
    text-align: center;
    border-bottom: 1px solid ${grey[200]};
    max-width: 500px;
    margin: 1em auto;
    padding-bottom: 20px;
`;

export const RecruitInfoContent = styled.div`
    font-size: 14px;
    background-color: #f5f5f5;
    padding: 20px;
    display: flex;
    align-items: center;
`;

export const RecruitInfoItem = styled.div`
    display: flex;
    align-items: center;
    flex: 1 0 auto;
`;

export const IconSvg = styled.div`
    width: 16px;
    height: 16px;
    fill: ${deepOrange[200]};
    margin-right: 3px;
`;
