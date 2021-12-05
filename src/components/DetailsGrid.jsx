import React from 'react'
import styled from 'styled-components';

const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    overflow: hidden;
`
const GridImg = styled.img`
    width: 100%;
    &:nth-child(2) {
        margin: 16px 0;
    }
`
const Images = styled.div`
    margin-left: 15px;
`

export const DetailsGrid = () => {
    return (
        <Grid>
            <img style={{width: '60%'}} src="/assets/gridImg.jpg" alt="" />
            <Images>
                <GridImg src="/assets/gridImg2.jpg" alt="" />
                <GridImg src="/assets/gridImg3.jpg" alt="" />
                <GridImg src="/assets/gridImg4.jpg" alt="" />
            </Images>
        </Grid>
    )
}
