import React from 'react';
import styled from 'styled-components';

const LinkList = styled.div`
    list-style: none;
    padding-top: 1px;
    li {
        line-height: 2em;
        display: inline-block;
        width: 25%;
        text-align: center;
    }
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
        width: 150px;
    }
`;
const LinkListHeader = styled.div`
    padding: 10px 15px;
    background-color: #fff;
`;
const ListGroup = styled.ul`
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    margin: 0;
`;

export default () => {
    return (
        <LinkList>
            <LinkListHeader>友情社区</LinkListHeader>
            <ListGroup>
                <li className="list-group-item">
                    <a href="http://cnodejs.org" title="CNode 社区" target="_blank" rel="noopener noreferrer">
                        <img src="//l.ruby-china.com/photo/2016/d427ef3efd33b57721df152c2aa1735e.png" />
                    </a>
                </li>
                <li className="list-group-item">
                    <a href="https://laravel-china.org" target="_blank" rel="noopener noreferrer">
                        <img src="//l.ruby-china.com/photo/2016/d7782871f3fac7e85a95d20c74046909.png" />
                    </a>
                </li>
                <a href="http://segmentfault.com" target="_blank" rel="noopener noreferrer">
                    <img src="//l.ruby-china.com/photo/2016/e91d14ee109ed066e215057ab40257b7.png" />
                </a>
                <li className="list-group-item">
                    <a href="https://testerhome.com/" target="_blank" rel="noopener noreferrer">
                        <img src="//l.ruby-china.com/photo/2016/5cd78b730062ab3c768bcc2592c5c7fa.png" />
                    </a>
                </li>
            </ListGroup>
        </LinkList>
    );
};
