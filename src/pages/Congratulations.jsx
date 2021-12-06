import React from 'react'
import { Bread, Container, ThisPage } from '../styled'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const CongratulationsSec = styled.section`
    padding: 40px 0 250px;
    background-color: ${(props) => props.theme.bgColor}
`
const Congratulation = styled.h4`
    margin: 70px 0 20px;
    font-size: 25px;
    color: ${(props) => props.theme.conTitle}
`
const ConTitle = styled.h2`
    margin: 0;
    font-weight: 500;
    font-size: 48px;
    color: ${(props) => props.theme.btnColor};
    padding-bottom: 24px;
    border-bottom: 1px solid ${(props) => props.theme.bellAfter}
`
const SmallTitle =styled.h3`
    margin: 37px 0 27px;
    font-size: 34px;
    color: ${(props) => props.theme.titleColor}
    letter-spacing: -0.005em;
`

export const Congratulations = () => {
    const { t } = useTranslation()
    return (
        <CongratulationsSec>
            <Container>
                <Bread to="/">{t('pageName1')} <span className="icon-right"></span></Bread>
                <Bread to="/hotelist">{t('pageName2')} <span className="icon-right"></span></Bread>
                <Bread to="/details">{t('pageName3')} <span className="icon-right"></span></Bread>
                <Bread to="/payment">{t('pageName4')} <span className="icon-right"></span></Bread>
                <ThisPage>{t('pageName5')}</ThisPage>

                <Congratulation>{t('congrat')}</Congratulation>
                <ConTitle>{t('yourTrip')}</ConTitle>
                <SmallTitle>{t('detaileName')}</SmallTitle>
            </Container>
        </CongratulationsSec>
    )
}
