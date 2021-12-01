import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Row } from '../styled';

const Filter = styled.div`
    flex: 1;
`
const Flex = styled.div`
    display: flex;
    align-items: center;
`
const FilterSearch = styled.div`
    margin-top: 13px;
    display: inline-block;
    background: #FFFFFF;
    border: 1px solid #E7ECF3;
    border-radius: 10px;
`
const SearchInp = styled.input`
    padding: 16px 20px 13px;
    font-size: 16px;
    outline: none;
    border: none;
    background-color: transparent;
`
const SearchBtn = styled.button`
    padding: 15px;
    font-size: 16px;
    border: none;
    background-color: transparent;
    color: #DADADA;
`
const SearchTitle = styled.h4`
    font-weight: 500;
    font-size: 18px;
    color: #141416;
    margin: 0;
`
const Label = styled.label`
    margin-left: 12px;
    font-size: 14px;
    color: #3B3E44;
`
const Checks = styled.div`
    padding: 30px 0 15px;
    &:not(:last-child) {
        border-bottom: 1px solid #E7ECF3;
    }
`
const Checkbox = styled.input`
    width: 20px;
    height: 20px;
`
const RangeInp = styled.input`
    padding: 7px 10px;
    outline: none;
    width: 65px;
    margin-left: 17px;
    border: 2px solid #316BFF;
    border-radius: 9px;
    background-color: transparent;
`
const FilterPrice = styled.span`
    font-weight: 500;
    color: #3B3E44;
`
const Sum = styled.span`
    color: #84878B;
`
const SeeMore = styled.a`
    font-weight: 500;
    color: #145CE6;
`

export const BigFilter = () => {
    const [range, setRange] = useState(0)
    const { t } = useTranslation()
    return (
        <Filter>
            <SearchTitle>{t('searchLocation')}</SearchTitle>
            <FilterSearch>
                <SearchInp type="text" placeholder={t('searchLocation')} />
                <SearchBtn><i className="icon-search"></i></SearchBtn>
            </FilterSearch>

            <Checks>
                <SearchTitle>{t('popFilter')}</SearchTitle>

                <Flex className="margin">
                    <Checkbox type="checkbox" style={{backgroundColor: 'red'}} />
                    <Label htmlFor="">{t('hotels')}</Label>
                </Flex>

                <Flex className="margin">
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('breakfast')}</Label>
                </Flex>

                <Flex className="margin">
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('cancell')}</Label>
                </Flex>

                <Flex className="margin">
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('prepay')}</Label>
                </Flex>
                
                <SeeMore href="#" >{t('seeMore')}</SeeMore>
            </Checks>

            <Checks>
                <SearchTitle>{t('priceRange')}</SearchTitle>
                <Row className="margin">
                    <input style={{width: '65%'}} type="range" onChange={(e) => setRange(e.target.value)} />
                    <RangeInp type="number" value={range}/>
                </Row>
                <Row>
                    <FilterPrice>$50</FilterPrice>
                    <FilterPrice>$150</FilterPrice>
                </Row>
            </Checks>

            <Checks>
                <SearchTitle>{t('property')}</SearchTitle>
                <Row className="margin">
                    <div>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('hotels')}</Label>
                    </div>
                    <Sum>108</Sum>
                </Row>
                <Row className="margin">
                    <div>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('apartment')}</Label>
                    </div>
                    <Sum>141</Sum>
                </Row>
                <Row className="margin">
                    <div>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('resort')}</Label>
                    </div>
                    <Sum>108</Sum>
                </Row>
                
                <SeeMore href="#">{t('seeMore')}</SeeMore>
            </Checks>

            <Checks>
                <SearchTitle>{t('budget')}</SearchTitle>
                <Flex className="margin">
                    <Checkbox type="checkbox" name="budget" id="lessBudget"  />
                    <Label htmlFor="lessBudget">{t('toPrice1')}</Label>
                </Flex>

                <Flex className="margin">
                    <Checkbox type="checkbox" name="budget" id="miniBudget" />
                    <Label htmlFor="miniBudget">{t('toPrice2')}</Label>
                </Flex>

                <Flex className="margin">
                    <Checkbox type="checkbox" name="budget" id="midBudget" />
                    <Label htmlFor="midBudget">{t('toPrice3')}</Label>
                </Flex>

                <Flex className="margin">
                    <Checkbox type="checkbox" name="budget" id="bigBudget" />
                    <Label htmlFor="bigBudget">{t('toPrice4')}</Label>
                </Flex>

                <Flex className="margin">
                    <Checkbox type="checkbox" name="budget" id="passBudget" />
                    <Label htmlFor="passBudget">{t('toPrice5')}</Label>
                </Flex>
                
            </Checks>

            <Checks>
                <SearchTitle>{t('facilities')}</SearchTitle>

                <Row className="margin">
                    <div>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('outdoor')}</Label>
                    </div>
                    <Sum>108</Sum>
                </Row>
                <Row className="margin">
                    <div>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('berbeque')}</Label>
                    </div>
                    <Sum>141</Sum>
                </Row>
                <Row className="margin">
                    <div>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('living')}</Label>
                    </div>
                    <Sum>108</Sum>
                </Row>
                <Row className="margin">
                    <div>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('roomSer')}</Label>
                    </div>
                    <Sum>108</Sum>
                </Row>
                <Row className="margin">
                    <div>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('swimming')}</Label>
                    </div>
                    <Sum>141</Sum>
                </Row>
                <Row className="margin">
                    <div>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('spa')}</Label>
                    </div>
                    <Sum>108</Sum>
                </Row>
                
                <SeeMore href="#">{t('seeMore')}</SeeMore>
            </Checks>
        </Filter>
    )
}
