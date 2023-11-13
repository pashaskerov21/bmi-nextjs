import { backdropAnimation } from "@/src/styles/animation";
import { column_between, column_center, column_start, row_align_start, row_between, row_center } from "@/src/styles/mixin";
import styled from "styled-components";

type CategoryCardProps = {
    $bgImage: string,
}

export const TrainingCardWrapper = styled.div<CategoryCardProps>`
    width: 100%;
    max-width: 280px;
    height: 300px;
    border-radius: 10px;
    background-image: url(${props => props.$bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.6);
        transition: all 0.3s;
        cursor: pointer;
        padding: 15px 12px;
        ${column_between};
        .title{
            width: 100%;
            text-transform: capitalize;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                left: 2px;
                bottom: -12px;
                width: 70px;
                height: 3px;
                background-color: #fff;
            }
        }
        .detail{
            width: 100%;
            padding: 15px;
            font-weight: 600;
            color: #fff;
            background-color: ${props => props.theme.primary_color_v1};
            ${row_center};
            text-align:center;
            border-radius: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        &:hover{
            background-color: rgba(25,50,99, 0.7)
        }
    }
`;


export const TrainingModalBackdrop = styled.div`
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: rgba(0,0,0, 0.8);
    animation: ${backdropAnimation} 0.3s ease forwards;
`;
export const TrainingModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: ${props => props.theme.primary_color_v1};
    z-index: 9999;
    width: 100%;
    min-height: 300px;
    max-height: 90vh;
    overflow: auto;
    padding: 20px 12px;
    border-radius: 10px;
    ${row_align_start};
    @media (min-width: 992px){
        align-items: center;
    }
    @media (min-width: 576px){
        width: 100%;
        max-width: 540px;
    }
    @media (min-width: 768px){
        max-width: 720px;
    }
    @media (min-width: 992px){
        max-width: 960px;
    }
    @media (min-width: 1200px){
        max-width: 1140px;
    }
    @media (min-width: 1400px){
        max-width: 1320px;
    }
    @media (min-width: 1600px){
        max-width: 1500px;
    }
    .close-button{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 50px;
        color: #fff;
        font-size: 22px;
        ${row_center};
        transition: all 0.3s;
        z-index: 999;
        cursor: pointer;
        &:hover{
            background-color: #fff;
            color: ${props => props.theme.primary_color_v1};
        }
    }
    .inner{
        width: 100%;
        position: relative;
        padding: 40px 0;
        .arrow-btn{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #fff;
            ${row_center};
            color: ${props => props.theme.primary_color_v1};
            font-size: 22px;
            display: none;
            z-index: 99;
            cursor: pointer;
            &.prev{
                left: 0;
            }
            &.next{
                right: 0;
            }
            svg{
                width: auto;
                height: auto;
            }
            @media (min-width: 768px){
                display: flex;
            }
        }
        .training-control{
            position: absolute;
            top: 50px;
            right: 0;
            ${column_center};
            z-index: 90;
            @media (min-width: 1200px){
                ${row_center};
                gap: 5px;
            }
            .custom-btn{
                position: relative;
                top: 0;
                left: 0;   
                background-color: #fff;
                min-height: 30px;
                ${row_center};
                border-radius: 10px;
                color: ${props => props.theme.primary_color_v1};
                font-weight: 600;
                font-size: 10px;
                padding: 10px 7px;
                user-select:none;
                font-weight: 600;
                z-index: 99;
                cursor: pointer;
                text-transform:capitalize;
                @media (min-width: 768px){
                    font-size: 12px;
                }
                svg{
                    width: auto;
                    height: auto;
                    padding: 0 5px;
                    user-select:none;
                }
            }
        }
    }
`;

export const TrainingSlide = styled.div`
    width: 90%;
    max-width: 1000px;
    ${column_center};
    @media (min-width: 992px){
        ${row_between};
    }
    .image{
        width: 100%;
        max-width: 500px;
        max-height: 400px;
        border-radius: 10px;
        margin-bottom: 30px;
        @media (min-width: 992px){
            width: 48%;
            margin-bottom: 0;
            align-self: stretch;
            
        }
        img{
            width: 100%;
            height: 100%;
            max-height: 300px;
            object-fit: cover;
            border-radius: 10px;
            @media (min-width: 992px){
                max-height: 600px;
            }
        }
    }
    .content{
        width: 100%;
        
        ${column_start};
        max-width: 500px;
        @media (min-width: 992px){
            width: 48%;
            height: 100%;
            align-self: stretch;
        }
        .status-badge{
            ${row_center};
            color: #fff;
            padding: 10px 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            img{
                display: block;
                object-fit: contain;
                margin-right: 10px;
            }
            &.online{
                background-color: ${props => props.theme.primary_color_v2}
            }
            &.offline{
                background-color: ${props => props.theme.secondary_color}
            }
        }
        .title{
            color: #fff;
            text-transform: capitalize;
            position: relative;
            margin-bottom: 25px;
            &::after{
                content: '';
                position: absolute;
                bottom: -13px;
                left: 0;
                width: 70px;
                height: 3px;
                background-color: #fff;
            }
        }
        .category{
            color: #fff;
            text-transform: capitalize;
            margin-bottom: 20px;
        }
        .text{
            color: #fff;
            line-height: 24px;
        }
        .buttons{
            width: 100%;
            ${column_center}
            margin-top: 15px;
            gap: 20px;
            @media (min-width: 576px){
                ${row_between};
            }
            a{
                ${row_center}
                width: 100%;
                padding: 20px;
                border-radius: 10px;
                color: #fff;
                font-size: 18px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                border: 2px solid transparent;
                transition: all 0.3s;
                &:first-child{
                    background-color: ${props => props.theme.primary_color_v2};
                    border-color: ${props => props.theme.primary_color_v2};
                    &:hover{
                        background-color: #fff;
                        border-color: #fff;
                        color: ${props => props.theme.primary_color_v1};
                    }
                }
                &:last-child{
                    border-color: #fff;
                    &:hover{
                        background-color: #fff;
                        color: ${props => props.theme.primary_color_v1};
                    }
                }
                @media (min-width: 576px){
                    width: 48%;
                }
            }
        }
    }
`;

export const TrainingAccordionWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    ${column_center};
    .accordion-item{
        width: 100%;
        ${column_center};
        .accordion-button{
            width: 100%;
            min-height: 70px;
            padding: 10px 12px;
            background-color: ${props => props.theme.bg_color_v3};
            border-top: 2px solid ${props => props.theme.primary_color_v2};
            ${row_between};
            cursor: pointer;
            @media (min-width: 992px){
                padding: 20px 25px;
                min-height: 90px;
            }
            .title{
                text-transform: capitalize;
                margin-right: 20px;
                user-select: none;
            }
            button{
                color: ${props => props.theme.primary_color_v2};
                font-size: 24px;
                transition: all 0.2s;
                @media (min-width: 992px){
                    font-size: 28px;
                }
            }
        }
        .accordion-body{
            width: 100%;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: all 0.3s ease;
            .inner{
                width: 100%;
                padding: 20px 12px;
                border: 1px solid ${props => props.theme.bg_color_v3};
                border-top: none;
                @media (min-width: 992px){
                    padding: 40px 25px;
                }
            }
        }
        &.active{
            .accordion-button{
                border-top: 2px solid ${props => props.theme.secondary_color};
                button{
                    color: ${props => props.theme.secondary_color};
                    transform: rotate(-180deg);
                }
            }
            .accordion-body{
                max-height: 1000px;
                height: auto;
                overflow: visible;
                opacity: 1;
            }
        }
        
    }
`;