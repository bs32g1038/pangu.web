import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function CardFooter(props) {
    const classes = useStyles();
    const { className, children, ...rest } = props;
    const cardFooterClasses = classNames({
        [classes.cardFooter]: true,
        [className]: className !== undefined,
    });
    return (
        <div className={cardFooterClasses} {...rest}>
            {children}
        </div>
    );
}
