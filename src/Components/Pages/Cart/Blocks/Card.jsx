import React from 'react';
import {Button, Card as AntdCard, Col} from 'antd';
import './styles.css';
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";

const {Meta} = AntdCard;

export const CardCart = (props) => {
    const {item, onDecreaseCount, onIncreaseCount, onDeleteProduct} = props;

    console.log(item)

    console.log(onIncreaseCount)

    return (
        <Col className="gutter-row" span={6}>
            <AntdCard
                hoverable
                cover={<img alt="example" src={item.image}/>}
            >
                <Meta title={item.name}/>
                <p>Цена: {item.price} грн.</p>
                <p>Количество:</p>
                <Button disabled={item.quantity === 1 } onClick={onDecreaseCount}>-</Button>
                <span>{item.quantity}</span>
                <Button onClick={onIncreaseCount}>+</Button>
                <Button type="primary" danger className="delete" onClick={onDeleteProduct}>
                    <DeleteOutlined />
                </Button>
            </AntdCard>
        </Col>
    )
}