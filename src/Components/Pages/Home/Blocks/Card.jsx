import React, {useState} from 'react';
import {Card as AntdCard} from 'antd';
import ReactCardFlip from "react-card-flip";
import './styles.css';

const {Meta} = AntdCard;

export const Card = ({item}) => {
    const [isFlipped, changeFlipped] = useState(false);

    const clickCard = () => {
        changeFlipped(!isFlipped)
    }

    return (
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
                <Meta title={item.price}/>
            </AntdCard>
        </ReactCardFlip>
    )
}