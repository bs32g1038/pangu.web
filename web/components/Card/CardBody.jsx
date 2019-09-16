import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function CardBody(props) {
    const classes = useStyles();
    const { className, children, ...rest } = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [className]: className !== undefined,
    });
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    );
}
