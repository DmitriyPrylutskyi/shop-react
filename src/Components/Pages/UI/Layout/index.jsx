import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {Layout as Wrapper, Menu} from 'antd';
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import './styles.css';

const { Header, Footer, Sider, Content } = Wrapper;

export const Layout = ({children}) => {
    const location = useLocation();

    const selected = {
        '/': '1',
        '/cart': '2'
    }

    return (
        <Wrapper>
            <Header></Header>
            <Wrapper>
                <Sider>
                    <Menu
                        defaultSelectedKeys={[selected[location.pathname]]}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                            <Link to="/cart">Cart</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    <div>{children}</div>
                </Content>
            </Wrapper>
            <Footer>Интернет-магазин "Сувенир"</Footer>
        </Wrapper>
    )
}