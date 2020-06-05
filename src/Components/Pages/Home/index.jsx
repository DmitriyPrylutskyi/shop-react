import React from 'react';
import {Card} from "./Blocks/Card";
import {Layout} from "../UI/Layout";
import {Row} from "antd";

export const Home = ({products, addCart}) => {
    return (
        <Layout>
            <Row gutter={[16, 16]}>
                {
                    products.map(el => {
                        return (
                            <Card
                                key={el.id}
                                item={el}
                                onAddCart = {() => addCart(el.id)}
                            />
                        )
                    })
                }
            </Row>
        </Layout>
    )
}