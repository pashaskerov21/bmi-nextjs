'use client'
import React from 'react'
import styled from 'styled-components'
import { BsChevronRight } from 'react-icons/bs'
import Link from 'next/link';
import { column_align_start, column_center, row_center, row_justify_start } from '@/src/styles/mixin';
import { Breadcrumb } from '../types';

const PageTitleWrapper = styled.div`
    width: 100%;
    ${column_center};
    padding: 10px 0;
    margin-bottom: 10px;
    @media (min-width: 992px){
        ${column_align_start}
    }
    @media (min-width: 1200px){
        margin-bottom: 20px;
    }
    .title{
        margin-bottom: 10px;
        text-transform: uppercase;
        @media (min-width: 992px){
            font-size: 32px;
        }
    }
    .breadcrumbs{
        width: 100%;
        ${row_center};
        flex-wrap: wrap;
        gap: 5px;
        @media (min-width: 992px){
            ${row_justify_start}
        }
        a{
            text-transform: capitalize;
            font-size: 12px;
            color: ${props => props.theme.text_color_v1};
            opacity: 0.6;
            display: block;
            transition: all 0.2s;
            @media (min-width: 768px){
                font-size: 16px;
            }
        }
        svg{
            font-size: 10px;
            display: block;
            color: ${props => props.theme.text_color_v1};
            opacity: 0.6;
            @media (min-width: 768px){
                font-size: 12px;
            }
        }
    }
`;



type PageTitleProps = {
    title?: string;
    breadcrumbs: Breadcrumb[];
    titleDictionary: { [key: string]: string },
};

const PageTitle: React.FC<PageTitleProps> = ({ title, breadcrumbs, titleDictionary, }) => {
    return (
        <PageTitleWrapper>
            <h2 className="title">{title}</h2>
            <div className="breadcrumbs">
                <Link href='/'>{titleDictionary.home}</Link>
                {
                    breadcrumbs.map(link => (
                        <React.Fragment key={link.id}>
                            <BsChevronRight />
                            <Link href={link.path}>{link.name}</Link>
                        </React.Fragment>
                    ))
                }
            </div>
        </PageTitleWrapper>
    )
}

export default React.memo(PageTitle)
