import React from 'react';
import styled from "styled-components";

const Cards = styled.div`
    width: 23%;
    border: 1px solid #E7ECF3;
    border-radius: 10px;
    color: ${(props) => props.theme.cardText};
    text-align: left;
    padding: 28px 30px 25px;
    margin-top: 30px;
    &:hover {
        border: none;
        background: ${(props) => props.theme.headerBgColor};
        box-shadow: 0px 20px 51px rgba(96, 96, 96, 0.1);
    }
`
const CardImg = styled.img`
    width: 70px;
    border-radius: 10px;
`
const Destination = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: ${(props) => props.theme.cardDes};
`

export const Card = () => {
    return (
        <Cards>
            <CardImg src="/assets/batu.jpg" alt="" />
            <h3>Batu, East Java</h3>
            <Destination>86 Destinations</Destination>
        </Cards>
    )
}