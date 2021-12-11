import React from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { Container, Bread, ThisPage } from '../styled'
import { Confirm } from '../components/Confirm';
import { Booked } from '../components/Booked';

const PaymentSec = styled.section`
    padding: 40px 0 250px;
    background-color: ${(props) => props.theme.bgColor}
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 50px;
`

export const Payment = () => {
    const { t } = useTranslation()
    return (
        <PaymentSec>
            <Container>
                <Bread to="/">{t('pageName1')} <span className="icon-right"></span></Bread>
                <Bread to="/hotelist">{t('pageName2')} <span className="icon-right"></span></Bread>
                <Bread to="/details">{t('pageName3')} <span className="icon-right"></span></Bread>
                <ThisPage>{t('pageName4')}</ThisPage>

                <Flex>
                    <Confirm/>
                    <Booked/>
                </Flex>
            </Container>
        </PaymentSec>
    )
}
