import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

export const UserFollowList = styled.div`
    display: flex;
    padding: 0 20px;
    flex-wrap: wrap;
`;

export const UserItem = styled(ListItemAvatar)`
    max-width: 20%;
    min-width: 20% !important;
    margin-bottom: 20px;
    flex: 1 0 auto;
`;

export const UserItemHeader = styled(Link)`
    display: flex;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.65);
    h3 {
        margin: 0;
        font-size: 14px;
    }
    p {
        margin-top: 5px;
        font-size: 13px;
    }
`;

export const UserItemBottom = styled.div`
    display: flex;
    font-size: 13px;
    align-items: center;
    margin-left: 6px;
    color: rgba(0, 0, 0, 0.45);
    button {
        padding: 0 4px;
        min-width: auto;
        font-size: 12px;
    }
`;
