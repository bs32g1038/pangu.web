import React from 'react';
import Router, { useRouter } from 'next/router';
import { parse } from 'url';
import { Right, Pagination, PaginationItem, PaginationLink } from './style';
import Button from '@material-ui/core/Button';

function getPages(props) {
    const { count } = props;
    const router = useRouter();
    const page = Number(router.query.page || 1);
    const limit = Number(router.query.limit || 10);
    const { pathname } = parse(router.asPath);
    const pageCount = Math.floor(count / limit);
    if (pageCount <= 0) {
        return [];
    }
    const pages = [];
    pages.push({
        text: '上一页',
        disabled: page <= 1,
        onClick: () => {
            if (page <= 1) {
                return false;
            }
            Router.push({
                pathname,
                query: { ...router.query, page: page - 1 },
            });
        },
    });
    for (let i = 1; i <= pageCount; i++) {
        pages.push({
            text: i,
            active: page === i ? true : false,
            onClick: () => {
                Router.push({
                    pathname,
                    query: { ...router.query, page: i },
                });
            },
        });
    }
    pages.push({
        text: '下一页',
        disabled: page + 1 > pageCount,
        onClick: () => {
            if (page + 1 > pageCount) {
                return false;
            }
            Router.push({
                pathname,
                query: { ...router.query, page: page + 1 },
            });
        },
    });

    return pages;
}

export default props => {
    const { count } = props;
    const pages = getPages(props);
    return (
        <Pagination>
            {pages.map((prop, key) => {
                return (
                    <PaginationItem key={key}>
                        {prop.onClick !== undefined ? (
                            <PaginationLink active={prop.active} disabled={prop.disabled}>
                                <Button onClick={prop.onClick}>{prop.text}</Button>
                            </PaginationLink>
                        ) : (
                            <PaginationLink active={prop.active} disabled={prop.disabled}>
                                <Button onClick={() => alert("you've clicked " + prop.text)}>{prop.text}</Button>
                            </PaginationLink>
                        )}
                    </PaginationItem>
                );
            })}
            <Right>
                共<strong> {count} </strong>条数据
            </Right>
        </Pagination>
    );
};
