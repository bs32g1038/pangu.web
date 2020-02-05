import React from 'react';
import Link from 'next/link';
import { Wrap, Menu, Title, MenuItem, MenuItemA } from './style';

interface Props {
    nodes: {
        id: string;
        icon: string;
        name: string;
    }[];
}

export default (props: Props) => {
    const { nodes = [] } = props;
    return (
        <Wrap>
            <Menu>
                <Title>技术频道</Title>
                <MenuItem>
                    <Link href="/">
                        <MenuItemA>
                            <img src={require('../../assets/logo.svg')} alt="盘古社区"></img>
                            <span>盘古社区</span>
                        </MenuItemA>
                    </Link>
                </MenuItem>
                {nodes.map(item => (
                    <MenuItem key={item.id}>
                        <Link href={`/n/${item.id}/t/all`}>
                            <MenuItemA>
                                <img src={item.icon} alt={item.name} />
                                <span>{item.name}</span>
                            </MenuItemA>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Wrap>
    );
};
