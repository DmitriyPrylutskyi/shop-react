import React from 'react';
import {Layout} from 'antd';
import './styles.css';
import {Card} from "./Blocks/Card";

const { Header, Footer, Sider, Content } = Layout;

const data = [
    {
        id: 1,
        name: "шарик",
        image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
        price: 10
    },
    {
        id: 2,
        name: "футболка",
        image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
        price: 20
    },
    {
        id: 4,
        name: "шарик 2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
        price: 5
    }
]

export const Home = () => {
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>
                    {
                        data.map(el => {
                            return (
                                <Card
                                    key={el.id}
                                    item={el}
                                />
                            )
                        })
                    }
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}