import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from './style';

const useStyles = makeStyles(styles);

export default function Pagination(props) {
    const classes = useStyles();
    const { pages, color } = props;
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
        </ul>
    );
}