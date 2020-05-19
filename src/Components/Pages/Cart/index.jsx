import React, {useState} from 'react';
import {Layout, Menu, Row} from 'antd';
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import {CardCart} from "./Blocks/Card";

const { Header, Footer, Sider, Content } = Layout;

const data = [
    {
        id: 1,
        name: "шарик",
        image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
        price: 10,
        count: 0
    },
    {
        id: 2,
        name: "футболка",
        image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
        price: 20,
        count: 0
    },
    {
        id: 4,
        name: "шарик 2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
        price: 5,
        count: 0
    }
]

export const Cart = () => {
    const [total, changeTotal] = useState(0);
    const [products, changeCount] = useState(data);

    const decreaseCount = (id) => {
        const el = products.find(item => item.id === id)
        changeTotal(total - el.price)
        changeCount(products.map(item => item.id === id
            ? { ...item, count: item.count - 1 }
            : item)
        )
    }

    const increaseCount = (id) => {
        const el = products.find(item => item.id === id)
        changeTotal(total + el.price)
        changeCount(products.map(item => item.id === id
            ? { ...item, count: item.count + 1 }
            : item)
        )
    }

    const deleteProduct = (id)=> {
        const el = products.find(item => item.id === id)
        changeCount(products.filter(item => item.id !== id))
        changeTotal(total - (el.price * el.count))
    }

    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                            Cart
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    <Row gutter={[16,16]}>
                        {
                            products.map(el => {
                                return (
                                    <CardCart
                                        key={el.id}
                                        item={el}
                                        decreaseCount={decreaseCount}
                                        increaseCount={increaseCount}
                                        deleteProduct={deleteProduct}
                                    />
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <h2>Итого: {total} грн.</h2>
                    </Row>
                </Content>
            </Layout>
            <Footer>Интернет- магазин "Сувенир"</Footer>
        </Layout>
    )
}