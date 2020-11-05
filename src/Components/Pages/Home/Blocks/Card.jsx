import React, {useState} from 'react';
import {Button, Card as AntdCard, Col} from 'antd';
import ReactCardFlip from "react-card-flip";
import '../../UI/Layout/styles.css';

const {Meta} = AntdCard;

export const Card = ({item, onAddCart}) => {
    const [isFlipped, changeFlipped] = useState(false);

    const clickCard = () => {
        changeFlipped(!isFlipped)
    }

    return (
        <Col className="gutter-row" span={6}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <AntdCard
                    hoverable
                    cover={<img alt="example" src={item.image}/>}
                    onClick={clickCard}
                >
                    <Meta title={item.name}/>
                </AntdCard>
                <AntdCard
                    hoverable
                    cover={<img alt="example" src={item.image}/>}
                    onClick={clickCard}
                >
                    <Meta title={`${item.price} грн.`} />
                </AntdCard>
            </ReactCardFlip>
            <Button type="primary" className="add-cart" onClick={onAddCart}>
                Add To Cart
            </Button>
        </Col>
    )
}