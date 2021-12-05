import React from 'react'
import { Bread, Container, ThisPage } from '../styled'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const CongratulationsSec = styled.section`
    padding: 40px 0 250px;
    background-color: ${(props) => props.theme.bgColor}
`

export const Congratulations = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Container>
                <Bread to="/">{t('pageName1')} <span className="icon-right"></span></Bread>
                <Bread to="/hotelist">{t('pageName2')} <span className="icon-right"></span></Bread>
                <Bread to="/hotelist">{t('pageName3')} <span className="icon-right"></span></Bread>
                <Bread to="/hotelist">{t('pageName4')} <span className="icon-right"></span></Bread>
                <ThisPage>{t('pageName5')}</ThisPage>
            </Container>
        </div>
    )
}
