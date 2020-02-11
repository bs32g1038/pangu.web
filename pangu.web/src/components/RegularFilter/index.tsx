import React from 'react';
import { FilterTable } from './style';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import styled from 'styled-components';
import ActiveLink from '../ActiveLink';
import { omitBy, isEmpty } from 'lodash';

const LinkA = styled.a`
    text-decoration: none;
    color: #666666;
    font-size: 14px;
    &.active {
        color: #ff6f3d;
        font-weight: 700;
    }
    :hover {
        cursor: pointer;
    }
`;

export default () => {
    const router = useRouter();
    const filterDefaultPath = { list: router.query.list };
    const goodPath = { ...router.query, good: true };
    const hotPath = { ...router.query, order: 'hot' };
    const timePath = { ...router.query, order: 'latest' };
    const sortDefaultPath = omitBy({ ...router.query, order: null }, isEmpty);
    return (
        <FilterTable>
            <tbody>
                <tr>
                    <th>筛选</th>
                    <td style={{ width: 100 }}>
                        <div>
                            <ActiveLink activeClassName="active" href={`?${queryString.stringify(filterDefaultPath)}`}>
                                <LinkA>综合</LinkA>
                            </ActiveLink>
                            &nbsp;&nbsp;
                            <ActiveLink activeClassName="active" href={`?${queryString.stringify(goodPath)}`}>
                                <LinkA>精华</LinkA>
                            </ActiveLink>
                            &nbsp;&nbsp;
                        </div>
                    </td>
                    <th>排序</th>
                    <td>
                        <ActiveLink activeClassName="active" href={`?${queryString.stringify(sortDefaultPath)}`}>
                            <LinkA>综合</LinkA>
                        </ActiveLink>
                        &nbsp;&nbsp;
                        <ActiveLink activeClassName="active" href={`?${queryString.stringify(hotPath)}`}>
                            <LinkA>热门</LinkA>
                        </ActiveLink>
                        &nbsp;&nbsp;
                        <ActiveLink activeClassName="active" href={`?${queryString.stringify(timePath)}`}>
                            <LinkA>发帖时间</LinkA>
                        </ActiveLink>
                    </td>
                </tr>
            </tbody>
        </FilterTable>
    );
};
