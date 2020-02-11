import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }: any) => {
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || '';

    console.log(asPath, props.href, asPath.replace('/', '') === props.href);

    const className =
        asPath.replace('/', '') === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

export default ActiveLink;
