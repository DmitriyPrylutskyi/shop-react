import React from 'react';
import {Button, Card as AntdCard, Col} from 'antd';
import './styles.css';
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";

const {Meta} = AntdCard;

export const CardCart = ({item, decreaseCount, increaseCount, deleteProduct}) => {
    return (
        <Col className="gutter-row" span={6}>
            <AntdCard
                hoverable
                cover={<img alt="example" src={item.image}/>}
            >
                <Meta title={item.name}/>
                <p>Цена: {item.price} грн.</p>
                <p>Количество:</p>
                <Button disabled={item.count === 0 } onClick={()=>{decreaseCount(item.id)}}>-</Button>
                <span>{item.count}</span>
                <Button onClick={()=>{increaseCount(item.id)}}>+</Button>
                <Button type="primary" danger className="delete" onClick={()=>{deleteProduct(item.id)}}>
                    <DeleteOutlined />
                </Button>
            </AntdCard>
        </Col>
    )
}