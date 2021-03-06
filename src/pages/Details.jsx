import React from 'react'
import { DetailsGrid } from '../components/DetailsGrid'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'
import { Bread, Container, Row, ThisPage } from '../styled'
import { Rating, IconStar, RatingParcent, RatingNum } from '../styled'
import { AboutList } from '../components/AboutList';
import { CardPrice } from '../components/CardPrice';

const DetailsSec = styled.section`
    padding: 40px 0 250px;
    background-color: ${(props) => props.theme.bgColor};
`
const Map = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.iconColor};
    margin-left: 20px;
`
const Icon = styled.i`
    margin-right: 10px;
    color: ${(props) => props.theme.iconColor};
`
const Flex = styled.div`
    display: flex;
    margin-bottom: 40px;
`
const Infos = styled.div`
    margin: 40px 0;
`
const Info1 = styled.span`
    padding: 5px 6px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span1Bg};
    color: ${(props) => props.theme.span1Color};
`
const Info2 = styled.span`
    padding: 5px 9px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span2Bg};
    color: ${(props) => props.theme.span2Color};
`
const Info3 = styled.span`
    padding: 5px 15px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span3Bg};
    color: ${(props) => props.theme.span3Color};
`
const Info4 = styled.span`
    padding: 5px 20px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span4Bg};
    color: ${(props) => props.theme.span4Color};
`
const Info5 = styled.span`
    padding: 5px 18px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span5Bg};
    color: ${(props) => props.theme.span5Color};
`
const Star = styled.i`
    margin-right: 10px;
    &:not(:last-child) {
        color: #F9CB62;
    }
    &:last-child {
        color: #C4C4C4;
    }
`
const DetailsTitle = styled.h2`
    margin: 30px 0;
    font-size: 48px;
    letter-spacing: -0.005em; 
    color: ${(props) => props.theme.cityName}
`

export const Details = () => {
    const { t } = useTranslation()
    return (
        <DetailsSec>
            <Container>
                <Bread to="/">{t('pageName1')} <span className="icon-right"></span></Bread>
                <Bread to="/hotelist">{t('pageName2')} <span className="icon-right"></span></Bread>
                <ThisPage>{t('pageName3')}</ThisPage>
                <DetailsTitle>{t('detaileName')}</DetailsTitle>
                
                <Flex>
                    <Rating>
                        <IconStar className="icon-star"></IconStar> 
                        <RatingParcent>4.91</RatingParcent> 
                        <RatingNum>(122 {t('reviews')})</RatingNum>
                    </Rating>
                    <Map><Icon className="icon-map"></Icon>{t('address')}</Map>
                </Flex>
                <DetailsGrid/>
                <Infos>
                    <Info1>5.0</Info1>
                    <Info2>{t('perfect')}</Info2>
                    <Info3>{t('hotels')}</Info3>
                    <Info4>{t('building')}</Info4>
                    <Info5>{t('topValue')}</Info5>
                    <span>
                        <Star className="icon-star"></Star>
                        <Star className="icon-star"></Star>
                        <Star className="icon-star"></Star>
                        <Star className="icon-star"></Star>
                        <Star className="icon-star"></Star>
                    </span>
                </Infos>
                <Row>
                    <AboutList/>
                    <CardPrice/>
                </Row>
            </Container>
        </DetailsSec>
    )
}
