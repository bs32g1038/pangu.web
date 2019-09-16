import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Card(props) {
    const classes = useStyles();
    const { className, children, plain, carousel, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardCarousel]: carousel,
        [className]: className !== undefined,
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
}
