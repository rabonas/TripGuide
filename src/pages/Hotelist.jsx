import React from 'react'
import { useTranslation } from 'react-i18next';
import { Search } from '../components/Search'
import styled from 'styled-components'
import { BigFilter } from '../components/BigFilter'
import { List } from '../components/List'

const TopSection = styled.section`
    padding: 120px 0 250px;
    background-color: ${(props) => props.theme.bgColor}
`
const BigContainer = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding: 70px 0 0;
`
const HotelistItems = styled.div`
    flex: 3;
    margin-left: 50px;
    text-align: center;
`
const Flex = styled.div`
    display: flex;
`
const View = styled.button`
    padding: 10px 40px;
    border: 1px solid #B1B5C4;
    border-radius: 47px;
    background-color: transparent;
`

export const Hotelist = () => {
    const { t } = useTranslation()
    return (
        <TopSection>
            <Search/>
            <BigContainer>
                <Flex>
                    <BigFilter/>
                    <HotelistItems>
                        <List image="/assets/hotelistImg.jpg" name="Zuich, Switzerland" price="$320" />
                        <List image="/assets/hotelistImg2.jpg" name="Zuich, Switzerland" price="$320" />
                        <List image="/assets/hotelistImg3.jpg" name="Zuich, Switzerland" price="$320" />
                        <View><i className="icon-loader"></i> {t('viewAll')}</View>
                    </HotelistItems>
                </Flex>
            </BigContainer>
        </TopSection>
    )
}