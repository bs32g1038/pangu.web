import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styles from './card-header';

const useStyles = makeStyles(styles);

export default function CardHeader(props) {
    const classes = useStyles();
    const { className, children, color, plain, ...rest } = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        [classes[color + 'CardHeader']]: color,
        [classes.cardHeaderPlain]: plain,
        [className]: className !== undefined,
    });
    return (
        <div className={cardHeaderClasses} {...rest}>
            {children}
        </div>
    );
}
