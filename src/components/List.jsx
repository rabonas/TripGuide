import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { Row, IconStar, RatingParcent, RatingNum } from '../styled';

const Rating = styled.div`
    font-weight: 500;
    font-size: 14px;
`
const ListItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #E7ECF3;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 50px;
    text-align: left;
`
const ListTitle = styled.h3`
    margin: 30px 0 22px;
    font-size: 40px;
    letter-spacing: -0.005em;
    color: #23262F;
`
const ListText = styled.div`
    padding: 0 26px; 
`
const Comforts = styled.span`
    display: block;
    font-size: 14px;
    margin: 12px 0;
    color: #3B3E44;
`
const Icon = styled.i`
    margin-right: 10px;
    color: #84878B;
`
const Flex = styled.div`
    display: flex;
`
const Gps = styled.span`
    margin-left: 20px;
    font-size: 14px;
    color: #84878B;
`
const Info = styled.span`
    color: #141416;
    display: inline-block;
    line-height: 34px;
    &:nth-child(1) {
        margin-right: 10px;
    }
`
const About = styled.div`
    margin: 30px 0;
`
const Price = styled.span`
    display: block;
    font-weight: bold;
    font-size: 28px;
    color: #23262F;
    padding: 10px 20px;
    background: #F4F5F6;
    border-radius: 37px;
    margin-bottom: 20px;
`
const ForPrice = styled.span`
    color: #84878B;
    font-weight: 500;
    font-size: 16px;
`
const Booking = styled.button`
    padding: 10px 30px;
    background: #3B71FE;
    box-shadow: 0px 5px 20px rgba(20, 92, 230, 0.14);
    border-radius: 23px;
    border: none;
    font-size: 20px;
    color: #FFFFFF;
`

export const List = (props) => {
    const { t } = useTranslation()
    return (
        <ListItem>
            <img src={props.image} alt="" />
            <ListText>
                <ListTitle>{props.name}</ListTitle>
                <Flex>
                    <Rating>
                        <IconStar className="icon-star"></IconStar> 
                        <RatingParcent>4.91</RatingParcent> 
                        <RatingNum>(122 {t('reviews')})</RatingNum>
                    </Rating>
                    <Gps><Icon className="icon-flag"></Icon>Zuich town, Switzerland</Gps>
                </Flex>

                <About>
                    <Info><Icon className="icon-map"></Icon>Zuich town, Switzerland</Info>
                    <Info><Icon className="icon-date"></Icon>15.05.2021-16.05.2021</Info>
                    <Info><Icon className="icon-plan"></Icon>Depature from zuich</Info>
                </About>

                <Row>
                    <div>
                        <Comforts><Icon className="icon-wifi"></Icon>{t('freeWifi')}</Comforts>
                        <Comforts><Icon className="icon-parking"></Icon>{t('freeParking')}</Comforts>
                        <Comforts><Icon className="icon-special"></Icon>{t('specialOffer')}</Comforts>
                        <Comforts><Icon className="icon-earth"></Icon>{t('visit')}</Comforts>
                        <Comforts><Icon className="icon-taking"></Icon>{t('talking')}</Comforts>
                    </div>
                    <div>
                        <Price>{props.price} <ForPrice>{t('forTwo')}</ForPrice></Price>
                        <Booking>{t('bookNow')}</Booking>
                    </div>
                </Row>

            </ListText>
        </ListItem>
    )
}
