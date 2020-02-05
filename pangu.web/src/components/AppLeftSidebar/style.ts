import styled from 'styled-components';

export const Wrap = styled.div`
    background-color: #fff;
    top: 0;
    bottom: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
`;

export const Menu = styled.ul`
    padding-left: 0;
    list-style: none;
    margin-top: 0;
`;

export const Title = styled.h3`
    text-align: center;
    margin: 0 0 10px 0;
    padding: 10px 0;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.25);
    font-size: 14px;
    color: #212121;
    position: relative;
    display: inline-block;
    padding-left: 10px;
    font-weight: normal;
    width: 100%;
`;

export const MenuItem = styled.li`
    width: 72px;
`;

export const MenuItemA = styled.a`
    padding: 13px 3px;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    align-items: center;
    position: relative;
    cursor: pointer;
    img {
        width: 24px;
    }
    span {
        margin-top: 5px;
        color: rgba(0, 0, 0, 0.85);
        font-size: 12px;
    }
    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: -moz-radial-gradient(right, ellipse cover, #ddd 0%, rgba(255, 255, 255, 0) 70%);
        background: -webkit-radial-gradient(right, ellipse cover, #ddd 0%, rgba(255, 255, 255, 0) 70%);
        background: radial-gradient(ellipse at right, #ddd 0%, rgba(255, 255, 255, 0) 70%);
    }
`;
