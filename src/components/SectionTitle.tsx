'use client'
import React from 'react'
import styled from 'styled-components'
import { row_center } from '@/src/styles/mixin';
import { SectionTitleProps } from '../types';

const SectionTitleWrapper = styled.div`
    width: 100%;
    padding: 5px 0;   
    ${row_center};
    text-align: center;
    max-width: 750px;
    margin: auto;
    margin-bottom: 10px;
    @media (min-width: 768px){
        padding: 15px;
        margin-bottom: 20px;
    }
    h1{
        position: relative;
        padding: 0 14px;
        text-transform: uppercase;
        text-align: center;
        font-size: 20px;
        @media (min-width: 576px){
            font-size: 24px;
        }
        @media (min-width: 768px){
            font-size: 28px;
        }
        @media (min-width: 992px){
            font-size: 32px;
            font-weight: 600;
        }
    }
    .line{
        width: 30px;
        height: 3px;
        background-color: ${props => props.theme.text_color_v2};
        display: none;
        @media (min-width: 768px){
            width: 60px;
            display: block
        }
    }
`;



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
