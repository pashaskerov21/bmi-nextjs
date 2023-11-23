import { backdropAnimation, fixHeaderAnimation, pulsePrimary, pulseWhite } from "@/src/styles/animation";
import { column_align_end, column_align_start, column_justify_start, row_align_end, row_between, row_center, row_justify_end, row_justify_start } from "@/src/styles/mixin";
import { Container } from "@/src/styles/utils";
import styled, { css } from "styled-components";


type GeneralNavBarProps = {
    $fixed: boolean,
}
export const GeneralNavBar = styled.nav<GeneralNavBarProps>`
    width: 100%;
    position: relative;
    ${props => props.$fixed && css`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        background-color: ${props => props.theme.bg_color_v1};
        box-shadow: 0 0 10px rgba(0,0,0,0.9);
        animation: ${fixHeaderAnimation} 0.5s ease forwards;
        @media (min-width: 992px){
            display: none;
        }
    `}
    .inner{
        width: 100%;
        ${row_between};
        padding: 8px 0;
        .right{
            ${row_justify_end};
            margin-left: 20px;
            @media (min-width: 992px){
                ${column_align_end};
            }
            .top, .bottom{
                ${row_justify_end};
            }
            .top{
                .social-icons{
                    display: none;
                    @media (min-width: 992px){
                        display: flex;
                    }
                    a{
                        padding: 6px;
                        border-radius: 5px;
                        margin-right: 5px;
                        color: ${props => props.theme.text_color_v2};
                        &:hover{
                            background-color: ${props => props.theme.text_color_v2};
                            color: ${props => props.theme.bg_color_v1};
                        }
                    }
                }
                @media (min-width: 992px){
                    margin-bottom: 30px;
                }
            }
            .bottom{
                .languages{
                    ${row_justify_end};
                    display: none;
                    @media (min-width: 992px){
                        display: flex;
                    }
                    a{
                        text-transform: uppercase;
                        font-size: 18px;
                        font-weight: 600;
                        margin-right: 8px;
                        color: ${props => props.theme.text_color_v2};
                        opacity: 0.6;
                        position: relative;
                        &::after{
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: -2px;
                            width: 100%;
                            height: 2px;
                            background-color: ${props => props.theme.text_color_v2};
                            opacity: 0;
                        }
                        &.active{
                            opacity: 1;
                            &::after{
                                opacity: 1;
                            }
                        }
                    }
                }
            }
            .mobile{
                ${row_justify_end};
                margin-left: 3px;
                button{
                    color: ${props => props.theme.text_color_v2};
                    font-size: 24px;
                    margin-left: 5px;
                }
            }
            .contact{
                ${row_justify_end}
                margin-left: 15px;
                a{
                    ${row_center}
                    padding: 0 15px;
                    border-left: 1px solid ${props => props.theme.text_color_v2};
                    &:last-child{
                        border-right: 1px solid ${props => props.theme.text_color_v2};
                    }
                    .icon{
                        font-size: 18px;
                        color: ${props => props.theme.text_color_v2};
                    }
                    .label{
                        margin-left: 15px;
                        color: ${props => props.theme.text_color_v1};
                        font-size: 16px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
`;



type ThemeButtonProps = {
    $themeStatus: string,
}
export const ThemeButton = styled.div<ThemeButtonProps>`
    min-width: 42px;
    max-width: 42px;
    max-height: 22px;
    min-height: 22px; 
    border: 1px solid ${props => props.theme.text_color_v2};
    border-radius: 15px;
    position: relative;
    @media (min-width: 992px){
        margin-left: 15px;
    }
    .icon{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fff;
        ${row_center};
        font-size: 9px;
        position: absolute;
        top: 50%;
        left: 0;
        transition: all 0.3s;
        background-color: ${props => props.theme.text_color_v2};
        color: ${props => props.theme.bg_color_v2};
        transform: ${props => props.$themeStatus === 'light' ? 'translate(3px , -50%)' : 'translate(22px , -50%)'};
        svg{
            display: block;
        }
        .sun{
            display: ${props => props.$themeStatus === 'dark' ? 'none' : 'block'};
        }
        .moon{
            display: ${props => props.$themeStatus === 'dark' ? 'block' : 'none'};
            
        }
    }
`;

type SearchFormProps = {
    $searchShow: boolean,
}

export const SearchForm = styled.form<SearchFormProps>`
    position: fixed;
    top: ${props => props.$searchShow ? '0' : '-100%'};
    left: 0;
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.bg_color_v1};
    z-index: 10;
    ${row_center};
    transition: all 0.3s;
    @media (min-width: 992px){
        position: relative;
        top: 0;
        left: 0;
        margin-left: 20px;
        z-index: 0;
        background-color: transparent;
        ${Container}{
            padding: 0;
            margin: 0;
        }
    }
    .inner{
        width: 100%;
        padding: 0;
        ${row_center};
        .input-row{
            width: 100%;
            position: relative;
            input{
                width: 100%;
                border: 1px solid ${props => props.theme.text_color_v2};
                background-color: transparent;
                padding: 8px 12px;
                border-radius: 10px;
                padding-right: 40px;
                color: ${props => props.theme.text_color_v2};
                caret-color:  ${props => props.theme.text_color_v2};
                font-weight: 500;
                font-size: 16px;
                &::placeholder{
                    color: ${props => props.theme.text_color_v2};
                    font-weight: 500;
                    font-size: 16px;
                }
            }
            button{
                position: absolute;
                color: ${props => props.theme.text_color_v2};
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
                font-size: 18px;
            }
        }
        .close-button{
            min-width: 28px;
            min-height: 28px;
            border-radius: 50%;
            ${row_center};
            border: 1px solid ${props => props.theme.text_color_v2};
            margin-left: 10px;
            font-size: 16px;
            color: ${props => props.theme.text_color_v2};
        }
    }
`;

type MenuProps = {
    $themeStatus?: string,
    $menuShow: boolean,
    $fixed?: boolean,
}

export const MenuBackdrop = styled.div<MenuProps>`
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: rgba(0,0,0, 0.8);
    opacity: 0;
    animation: ${backdropAnimation} 0.3s ease forwards;
    display: ${props => props.$menuShow ? 'block' : 'none'};
    @media (min-width: 992px){
        display: none !important;
    }
`;



export const LinkMenuWrapper = styled.div<MenuProps>`
    position: fixed;
    top: 0;
    right: ${props => props.$menuShow ? '0' : '-100%'};
    width: 100%;
    max-width: 400px;
    min-height: 100vh;
    background-color: ${props => props.theme.primary_color_v1};
    z-index: 999999;
    ${column_justify_start};
    transition: all 0.3s;
    max-height: 100vh;
    overflow: auto;
    .fix-logo{
        display: none;
        margin-right: 30px;
    }
    @media (min-width: 576px){
        padding: 0 12px
    }
    @media (min-width: 992px){
        position: relative;
        top: 0;
        right: 0;
        max-width: 100%;
        min-height: 50px;
        background-color: transparent;
        padding: 0;
        z-index: 0;
        justify-content: center;
        ${props => props.$fixed && css`
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            background-color: ${props => props.theme.bg_color_v1};
            box-shadow: 0 0 10px rgba(0,0,0,0.9);
            animation: ${fixHeaderAnimation} 0.5s ease forwards;
            padding: 10px 0;
            .fix-logo{
                display: block;
            }
        `}
    }
    .body{
        width: 100%;
        @media (min-width: 992px){
            ${row_between};
        }
        .right{
            width: 100%;
            @media (min-width: 992px){
                ${row_justify_end};
            }
        }
        .page-links{
            width: 100%;
            ${column_align_start}
            @media (min-width: 992px){
                ${row_between};
                &.fix-true{
                    max-width: 1000px;
                }
            }
            a.link{
                color: #fff;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0.5px;
                padding: 6px 0;
                margin-bottom: 5px;
                text-transform: capitalize;
                transition: all 0.2s;
                ${row_center};
                @media (min-width: 992px){
                    color: ${props => props.theme.text_color_v1};
                    margin-bottom: 0;
                    font-size: 11px;
                    padding: 10px 15px;
                    text-align: center;
                }
                @media (min-width: 1200px){
                    font-size:14px;
                }
                @media (min-width: 1400px){
                    font-size:16px;
                }
                &:hover{
                    background-color: #fff;
                    color: ${props => props.theme.primary_color_v1};
                    padding: 6px 15px;
                    animation: ${pulseWhite} 1s ease infinite;
                    @media (min-width: 992px){
                        padding: 10px 15px;
                        background-color: ${props => props.theme.text_color_v2};
                        color: ${props => props.theme.text_color_v3};
                        ${props => props.$themeStatus === 'dark' ? css`
                            animation: ${pulseWhite} 1s ease infinite;
                        ` : css`
                            animation: ${pulsePrimary} 1s ease infinite;
                        `}
                    }
                }
                &.active{
                    background-color: #fff;
                    color: ${props => props.theme.primary_color_v1};
                    padding: 6px 15px;
                    @media (min-width: 992px){
                        padding: 10px 15px;
                        background-color: ${props => props.theme.text_color_v2};
                        color: ${props => props.theme.text_color_v3};
                    }
                }
                
            }
        }
        .languages{
            ${row_justify_end};
            margin-left: 10px;
            display: none;
            @media (min-width: 992px){
                display: flex;
            }
            a{
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 600;
                margin-right: 8px;
                color: ${props => props.theme.text_color_v2};
                opacity: 0.6;
                position: relative;
                @media (min-width: 1400px){
                    font-size: 16px;
                }
                &.active{
                    opacity: 1;
                }
            }
        }
        ${ThemeButton}{
            margin-left: 10px;
            display: none;
            @media (min-width: 992px){
                display: block;
            }
        }
    }
    .header{
        width: 100%;
        ${row_between};
        margin-bottom: 15px;
        padding: 10px 0;
        .right{
            ${row_justify_end};
            .languages{
                color: #fff;
                margin-right: 10px;
                a{
                    text-transform: uppercase;
                    font-size: 18px;
                    font-weight: 600;
                    margin-right: 5px;
                    opacity: 0.6;
                    &.active{
                        opacity: 1;
                    }
                }
            }
        }
        .close-button{
            font-size: 20px;
            color: #fff;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            ${row_center};
            background-color: #fff;
            color: ${props => props.theme.primary_color_v1};
            cursor: pointer;
        }
    }
    .footer{
        width: 100%;
        margin-top: 20px;
        ${column_align_start};
        .social-icons{
            a{
                color: #fff;
                font-size: 18px;
            }
        }
        .contact{
            margin-top: 25px;
            ${column_align_start}
            width: 100%;
            a{
                margin-bottom: 15px;
                ${row_justify_start};
                color: #fff;
                .icon{
                    font-size: 18px;
                    margin-right: 10px;
                }
                .label{
                    font-size: 14px;
                    font-weight: 500;
                }
            }
        }
    }
`;
