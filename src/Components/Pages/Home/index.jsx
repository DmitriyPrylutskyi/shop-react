import React from 'react';
import {Card} from "./Blocks/Card";
import {Layout} from "../UI/Layout";
import {Row} from "antd";

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
            <Row gutter={[16, 16]}>
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
            </Row>
        </Layout>
    )
}