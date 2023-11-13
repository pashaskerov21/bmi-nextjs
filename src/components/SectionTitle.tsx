'use client'
import { row_center } from '@/src/styles/mixin';
import React from 'react'
import styled from 'styled-components'

const SectionTitleWrapper = styled.div`
    width: 100%;
    padding: 15px 0;   
    ${row_center};
    text-align: center;
    max-width: 750px;
    margin: auto;
    margin-bottom: 20px;
    h1{
        position: relative;
        padding: 0 14px;
        text-transform: uppercase;
        text-align: center;
        /* font-size: 26px; */
        @media (min-width: 992px){
            /* font-size: 40px; */
            font-size: 32px;
            font-weight: 600;
        }
    }
    .line{
        width: 30px;
        height: 3px;
        background-color: ${props => props.theme.text_color_v2};
        @media (min-width: 768px){
            width: 60px;
        }
    }
`;

type SectionTitleProps = {
    title: string,
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <SectionTitleWrapper>
            <div className="line"></div>
            <h1>{title}</h1>
            <div className="line"></div>
        </SectionTitleWrapper>
    )
}

export default React.memo(SectionTitle)
