import styled from 'styled-components';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

export const Title = styled.div`
    color: rgba(0, 0, 0, 0.65);
    margin-top: 10px;
    margin-bottom: 10px;
    a {
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
    }
`;

export const Meta = styled.div`
    color: rgba(0, 0, 0, 0.45);
    margin-top: 10px;
    padding-bottom: 10px;
    .author {
        margin-right: 5px;
    }
    .author,
    .time,
    .count {
        color: rgba(0, 0, 0, 0.65);
        font-weight: 700;
    }
`;

export const ReplySign = styled.div`
    color: ${red[500]};
    margin-bottom: 20px;
`;

export const MarkdownBody = styled.div`
    border: 1px solid #f5f5f5;
    padding: 20px;
`;

export const ControlPanel = styled.div`
    text-align: right;
    /* background-color: ${blue[500]}; */
    border: 1px solid #f5f5f5;
    border-top: none;
    padding: 10px;
`;
