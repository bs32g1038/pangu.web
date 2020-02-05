import styled from 'styled-components';
import TableBody from '@material-ui/core/TableBody';

export const Author = styled.a`
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.45);
`;

export const CTableBody = styled(TableBody)`
    .MuiTableCell-root {
        border-bottom: none;
    }
`;
