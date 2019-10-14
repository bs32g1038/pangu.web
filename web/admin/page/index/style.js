import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';

export const Author = styled(Link)`
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.45);
`;

export const CTableBody = styled(TableBody)`
    .MuiTableCell-root {
        border-bottom: none;
    };
`;
