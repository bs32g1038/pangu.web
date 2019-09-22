import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import stylesc from './style.module.scss';
import styles from './style';
import { withRouter } from 'react-router';
const queryString = require('query-string');

const useStyles = makeStyles(styles);

function getPages(props) {
    const { count, history, location } = props;

    const Pagination = queryString.parse(location.search);
    const page = Number(Pagination.page || 1);
    const limit = Number(Pagination.limit || 20);

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
            const path = location.pathname + '?' + queryString.stringify({ ...Pagination, page: page - 1 });
            history.push(path);
        },
    });
    for (let i = 1; i <= pageCount; i++) {
        pages.push({
            text: i,
            active: page === i ? true : false,
            onClick: () => {
                const path = location.pathname + '?' + queryString.stringify({ ...Pagination, page: i });
                history.push(path);
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
            const path = location.pathname + '?' + queryString.stringify({ ...Pagination, page: page + 1 });
            history.push(path);
        },
    });

    return pages;
}

function Pagination(props) {
    const classes = useStyles();
    const { color, count } = props;
    const pages = getPages(props);
    return (
        <ul className={classes.pagination}>
            {pages.map((prop, key) => {
                const paginationLink = classNames({
                    [classes.paginationLink]: true,
                    [classes[color]]: prop.active,
                    [classes.disabled]: prop.disabled,
                });
                return (
                    <li className={classes.paginationItem} key={key}>
                        {prop.onClick !== undefined ? (
                            <Button onClick={prop.onClick} className={paginationLink}>
                                {prop.text}
                            </Button>
                        ) : (
                            <Button onClick={() => alert("you've clicked " + prop.text)} className={paginationLink}>
                                {prop.text}
                            </Button>
                        )}
                    </li>
                );
            })}
            <span className={stylesc.right}>
                共<strong> {count} </strong>条数据
            </span>
        </ul>
    );
}

export default withRouter(Pagination);
