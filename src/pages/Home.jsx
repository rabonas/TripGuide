import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import { Featured } from '../components/Featured';
import { Intro } from '../components/Intro';
import { TopTour } from '../components/TopTour';
import { Container, Row, RowAround } from '../styled';
import { Explore } from '../components/Explore';
import { Trending } from '../components/Trending';
import { Travel } from '../components/Travel';
import { Card } from '../components/Card';

const SectionTop = styled.section`
    background-color:  ${(props) => props.theme.bgColor};
    padding: 150px 0 80px;
    text-align: center;
` 
const Section = styled.section`
    background-color:  ${(props) => props.theme.bgColor};
    padding-bottom: 70px;
`
const SectionTrending = styled.section`
    padding: 60px 0;
    text-align: center;
    background-color: ${(props) => props.theme.sectionBg};
`
const SectionTravel = styled.section`
    padding: 75px 0 250px;
    background-color: ${(props) => props.theme.bgColor};
`
const TravelCards = styled.div`
    margin-top: 30px;
`
const SecTitle = styled.h2`
    font-size: 48px;
    letter-spacing: -0.005em;
    color: ${(props) => props.theme.titleColor};
    margin: 0 0 12px;
`
const SecText = styled.p`
    // max-width: 600px;
    font-weight: 500;
    margin: 0 auto;
    line-height: 24px;
    margin: 0;
    color: #84878B;
`

const Home = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Intro/>
            <SectionTop>
                <SecTitle>{t('bestPlaceTitle')}</SecTitle>
                <SecText>{t('bestPlaceText')}</SecText>
                <Container>
                    <Row>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Row>
                </Container>
            </SectionTop>

            <Section>
                <Container>
                    <SecTitle>{t('featuredTitle')}</SecTitle>
                    <SecText>{t('featuredText')}</SecText>
                    <Featured/>
                </Container>
            </Section>

            <Section>
                <Container>
                    <SecTitle>{t('topTitle')}</SecTitle>
                    <SecText>{t('topText')}</SecText>
                    <Swiper slidesPerView="3" spaceBetween="30" style={{marginTop: '60px'}}>
                        <SwiperSlide>
                            <TopTour image='/assets/big-japan.jpg' state='Japan' city='Japan' pop='10 Popular Places' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopTour image='/assets/bali.jpg' state='Indonesia' city='Bali' pop='10 Popular Places' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TopTour image='/assets/spain.jpg' state='Barcelona' city='Spain' pop='10 Popular Places' />
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </Section>
            
            <Section>
                <Container>
                    <SecTitle>{t('exploreTitle')}</SecTitle>
                    <SecText>{t('exploreText')}</SecText>
                    <Swiper slidesPerView="4" spaceBetween="30" style={{marginTop: '50px'}}>
                        <SwiperSlide>
                            <Explore/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Explore/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Explore/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Explore/>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </Section>

            <SectionTrending>
                <SecTitle>{t('trendingTitle')}</SecTitle>
                <SecText>{t('trendingText')}</SecText>
                <Container>
                    <RowAround>
                        <Trending image="/assets/manila.jpg" name="Manila" />
                        <Trending image="/assets/san-framcisco.jpg" name="San Francisco" />
                        <Trending image="/assets/frankfurt.jpg" name="Frankfurt main" />
                        <Trending image="/assets/washington.jpg" name="Washington" />
                        <Trending image="/assets/stokholm.jpg" name="Stockholm" />
                        <Trending image="/assets/seattle.jpg" name="Seattle" />
                    </RowAround>
                </Container>
            </SectionTrending>

            <SectionTravel>
                <Container>
                    <SecTitle>{t('travelTitle')}</SecTitle>
                    <SecText>{t('travelText')}</SecText>
                    <TravelCards>
                        <Row>
                            <Travel image="/assets/beach.jpg" name={t('beach')} />
                            <Travel image="/assets/city.jpg" name={t('city')} />
                            <Travel image="/assets/hiking.jpg" name={t('hiking')} />
                            <Travel image="/assets/sports.jpg" name={t('sports')} />
                        </Row>
                    </TravelCards>
                </Container>
            </SectionTravel>
        </div>
    );
}

export default Home;
