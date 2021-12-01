import styled from "styled-components";

export const Container = styled.div`
    max-width: 86.732%;
    margin: 0 auto;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const RowAround = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`
export const AlignCenter = styled.div`
    display: flex;
    align-items: center;
`
export const LogoText = styled.span`
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.theme.colorLogo}
`
export const IconStar = styled.i`
    color: #FFD166;
`
export const RatingParcent = styled.span`
    padding: 0 5px;
    color: ${(props) => props.theme.cardText};
`
export const RatingNum = styled.span`
    color: ${(props) => props.theme.iconColor};
`

export const DarkTheme = {
    bgColor: '#141416',
    headerBgColor: '#222529',
    hoverLInk: '#3539454d',
    cardText: '#E7ECF3',
    cardDes: '#777E90',
    headerText: '#E7ECF3',
    colorLogo: '#fff',
    bellAfter: '#3B3E44',
    btnColor: '#FCFCFD',
    titleColor: '#F4F5F6',
    inpBg: '#3B3E44',
    inpBorder: '#4A4E54',
    iconColor: '#B1B5C4',
    arrowBg: '#42464B',
    arrowColor: '#F4F5F6',
    modulBorder: '1px solid #3B3E44',
    modulAge: '#FCFCFD',
    sectionBg: '#18191B',
    cityName: '#FCFCFD',
    cityPrice: '#F4F5F6',
    footerBg: '#222529',
    themeBg: '#3B3E44',
    themeBr: '#464950',
    LightBtn: 'transparent',
    darkBtn: '#474A52',
    lightColor: '#84878B',
    darkColor: '#E7ECF3'
};

export const LightTheme = {
    bgColor: '#FBFBFB',
    headerBgColor: '#fff',
    hoverLInk: '#F4F5F6',
    cardText: '#3B3E44',
    cardDes: '#84878B',
    headerText: '#84878B',
    colorLogo: '#222529',
    bellAfter: '#E7ECF3',
    btnColor: '#3B3E44',
    titleColor: '#23262F',
    inpBg: '#F4F5F7',
    inpBorder: '#E7E8EA',
    iconColor: '#84878B',
    arrowBg: '#fff',
    arrowColor: '#B1B5C4',
    modulBorder: 'none',
    modulAge: '#777E91',
    sectionBg: '#F5F5F5',
    cityName: '#282832',
    cityPrice: '#3B3E44',
    footerBg: '#F4F5F6',
    themeBg: '#fff',
    themeBr: '#EFEFEF',
    LightBtn: '#FCFCFD',
    darkBtn: 'transparent',
    lightColor: '#3B3E44',
    darkColor: '#868B90'
};

