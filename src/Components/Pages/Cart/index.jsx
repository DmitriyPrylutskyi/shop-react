import React from 'react';
import {Row} from 'antd';
import {CardCart} from "./Blocks/Card";
import {Layout} from "../UI/Layout";

export const Cart = ({cart, total, incCount, decCount, deleteProduct}) => {
    return (
        <Layout>
            <Row gutter={[16, 16]}>
                {
                    cart.map(el => {
                        return (
                            <CardCart
                                key={el.id}
                                item={el}
                                onDecreaseCount={() => decCount(el.id)}
                                onIncreaseCount={() => incCount(el.id)}
                                onDeleteProduct={() => deleteProduct(el.id)}
                            />
                        )
                    })
                }
            </Row>
            <Row>
                <h2>Итого: {total} грн.</h2>
            </Row>
        </Layout>
    )
}