import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router";
import { CgArrowsExchange } from 'react-icons/cg'
import Select from 'react-select';
import { Container, Row } from '../styled'
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SearchRow = styled.div`
    width: 80%;
    padding-bottom: 26px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.bellAfter};
`
const SearchDiv = styled.div`
    // position: absolute;
    // bottom: -78px;
    // width: 85.73%;
    padding: 30px 60px;
    background: ${(props) => props.theme.headerBgColor};
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
    border-radius: 20px;
`
const Reservation = styled.span`
    position: relative;
    margin-right: 30px; 
    color: #84878B;
    .react-tabs__tab.react-tabs__tab--selected &{
        color: ${(props) => props.theme.btnColor};
    }
`
const Sum = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 10px;
    &:nth-child(2) {
        border-top: 1px solid ${(props) => props.theme.bellAfter};
        border-bottom: 1px solid ${(props) => props.theme.bellAfter};
    }
`
const Pessenger = styled.div`
    display: inline-block;
    position: relative;
    margin-left: 25px; 
`
const ContentText = styled.span`
    display: block;
    margin-bottom:6px;
    font-weight: 500;
    color: ${(props) => props.theme.modulAge};
`
const ContentAge = styled.span`
    font-size: 14px;
    color: #B1B5C4;
`
const ContentBtn = styled.button`
    border: 1px solid #E6E8EC;
    padding: 10px;
    border-radius: 50%;
    font-size: 12px;
    background-color: transparent;
    color: #E6E8EC;
`
const UserCount = styled.span`
    font-size: 14px;
    margin: 0 12px;
    color: #777E91;
`
const SearchCard = styled.div`
    width: 25%;
    position: relative;
    background: ${(props) => props.theme.inpBg};
    padding: 10px 20px;
    border: 1px solid ${(props) => props.theme.inpBorder};
    border-radius: 8px;
    &:nth-child(1) {
        width: 31%;
    }
`
const SearchCardName = styled.label`
    display: block;
    margin: 0 0 6px;
    font-weight: 500;
    font-size: 18px;
    color: ${(props) => props.theme.btnColor};
`
const CheckInp = styled.input`
    width: 200px;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
`
const SearchBtn = styled.button`
    background: #3B71FE;
    border-radius: 10px;
    padding: 22px 42px;
    font-size: 20px;
    margin-left: 35px;
    color: #FFFFFF;
    border: none;
`
const ArrayIcon = styled.span`
    position: absolute;
    left: -22px;
    top: 24%;
    padding: 8px 8px 4px;
    font-size: 20px;
    border-radius: 50%;
    color: ${(props) => props.theme.arrowColor};
    background-color: ${(props) => props.theme.arrowBg};
`
const Form = styled.form`
    margin-top: 28px;
`
const IconBottom = styled.span`
    display: inline-block;
    font-size: 10px;
    color: ${(props) => props.theme.iconColor};
    transform: rotate(0deg);
`
const Content = styled.div`
    display: none;
    position: absolute;
    width: 350px;
    top: -250px;
    left: 0;
    padding: 10px 30px;
    background: ${(props) => props.theme.headerBgColor};
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
    border-radius: 16px;
    border: ${(props) => props.theme.modulBorder};
`

export const Search = () => {
    const [user, setUser] = useState(0);
    const [child, setChild] = useState(0);
    const [city, setCity] = useState('')
    const [infat, setInfat] = useState(0);

    let history = useNavigate()

    const { t } = useTranslation()

    const total = user + child + infat;

    const hendleActive = (el) => {
        if(el.target.className === 'total') {
            el.target.className = 'total active'
        } else if(el.target.className === 'total active') {
            el.target.className = 'total'
        }
    }

    const cities = [
        { value: "Dubai", label: "Dubai" },
        { value: "Doha", label: "Doha" },
        { value: "Darling Harbour", label: "Darling Harbour" },
        { value: "Dhaka", label: "Dhaka" },
        { value: "Chili", label: "Chili" },
        { value: "Russia", label: "Russia" },
        { value: "America", label: "America" },
        { value: "Japan", label: "Japan" },
        { value: "Karea", label: "Karea" },
        { value: "Fransia", label: "Fransia" },
        { value: "Uzbekistan", label: "Uzbekistan" },
        { value: "Italy", label: "Italy" },
    ]

    const hendleSearch = (e) => {
        e.preventDefault();
        history('/hotelist')
    }

    const hendleCities = (newValue) => {
        setCity(newValue.value)
        console.log(newValue.value)
    }
    
    return (
        <Container>
            <SearchDiv>
                <SearchRow>
                    <Row>
                        <Tabs>
                            <TabList>
                                <Tab><Reservation><i className="icon-hotel"></i> {t('hotel')}</Reservation></Tab>
                                <Tab><Reservation><i className="icon-flight"></i> {t('flight')}</Reservation></Tab>
                                <Tab><Reservation><i className="icon-car"></i> {t('carRental')}</Reservation></Tab>
                            </TabList>
                        </Tabs>
                    </Row>
                    <Pessenger>
                        <button onClick={hendleActive} className="total">{total} {t('pess')} <IconBottom className="icon-bottom"></IconBottom></button>
                        <Content className="content">
                            <Sum>
                                <div>
                                    <ContentText>{t('adult')}</ContentText>
                                    <ContentAge>{t('adultAge')}</ContentAge>
                                </div>
                                <div>
                                    <ContentBtn onClick={() => {setUser(user > 0 ? user - 1 : 0)}}><i className="icon-minus"></i></ContentBtn>
                                    <UserCount>{user}</UserCount>
                                    <ContentBtn onClick={() => {setUser(user + 1)}}><i className="icon-plus"></i></ContentBtn>
                                </div>
                            </Sum>
                            <Sum>
                                <div>
                                    <ContentText>{t('child')}</ContentText>
                                    <ContentAge>{t('childAge')}</ContentAge>
                                </div>
                                <div>
                                    <ContentBtn onClick={() => {setChild(child > 0 ? child - 1 : 0)}}><i className="icon-minus"></i></ContentBtn>
                                    <UserCount>{child}</UserCount>
                                    <ContentBtn onClick={() => {setChild(child + 1)}}><i className="icon-plus"></i></ContentBtn>
                                </div>
                            </Sum>
                            <Sum>
                                <div>
                                    <ContentText>{t('infant')}</ContentText>
                                    <ContentAge>{t('infantAge')}</ContentAge>
                                </div>
                                <div>
                                    <ContentBtn onClick={() => {setInfat(infat > 0 ? infat - 1 : 0)}}><i className="icon-minus"></i></ContentBtn>
                                    <UserCount>{infat}</UserCount>
                                    <ContentBtn onClick={() => {setInfat(infat + 1)}}><i className="icon-plus"></i></ContentBtn>
                                </div>
                            </Sum>
                        </Content>
                    </Pessenger>
                </SearchRow>

                <Form>
                    <Row>
                        <SearchCard>
                            <SearchCardName>{t('location')}</SearchCardName>
                            <Select options={cities} placeholder={t('inpPlace')} onClick={hendleCities} />
                        </SearchCard>
                        <SearchCard>
                            <SearchCardName>{t('checkIn')}</SearchCardName>
                            <CheckInp type="date" className="check"/>
                            <ArrayIcon><CgArrowsExchange/></ArrayIcon>
                        </SearchCard>
                        <SearchCard>
                            <SearchCardName>{t('checkOut')}</SearchCardName>
                            <CheckInp type="date" className="check"/>
                            <ArrayIcon><CgArrowsExchange/></ArrayIcon>
                        </SearchCard>
                        <SearchBtn onClick={hendleSearch}>{t('search')}</SearchBtn>
                    </Row>
                </Form>
                </SearchDiv>
        </Container>
    )
}