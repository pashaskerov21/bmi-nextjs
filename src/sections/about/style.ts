import { pulseWhite } from "@/src/styles/animation";
import { column_center,column_start, row_center, row_justify_start, row_start } from "@/src/styles/mixin";
import styled from "styled-components";


export const AboutContentWrapper = styled.div`
    width: 100%;
    .title{
        width: 100%;
        padding: 10px;
        font-weight: 600;
        text-transform: capitalize;
        @media (min-width: 992px){
            font-size: 32px;
            border-left: 3px solid ${props => props.theme.text_color_v2};
            margin-bottom: 30px;
        }
    }
    .text{
        font-size: 14px;
        line-height: 24px;
        @media (min-width: 1200px){
            font-size: 16px;
        }
        a{
            margin-left: 10px;
            font-weight: 600;
            color: ${props => props.theme.primary_color_v2};
        }
    }
`;
export const AboutReportWrapper = styled.div`
        width: 100%;
        ${column_center}
        flex-wrap: wrap;
        gap: 40px;
        padding: 20px 0;
        @media (min-width: 992px){
            ${row_justify_start}
        }
        .icon{
            ${row_start}
            @media (min-width: 992px){
                max-width: 200px;
            }
            img{
                object-fit: contain;
                margin-right: 10px;
            }
            .info{
                height: 100%;
                ${column_start};
                
                span{
                    &:first-child{
                        margin-bottom: 10px;
                        font-weight: 600;
                    }
                    &:last-child{
                        text-transform: capitalize;
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }
        }
`;
export const AboutImageWrapper = styled.div`
    width: 100%;
    max-width: 550px;
    max-height: 400px;
    position: relative;
    border-radius: 10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    .hover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        ${row_center};
        background-color: rgba(0,0,0, 0.5);
        border-radius: 10px;
        a{
            width: 40px;
            height: 40px;
            color: #fff;
            ${row_center};
            border: 1px solid #fff;
            border-radius: 50%;
            @media (min-width: 992px){
                width: 80px;
                height: 80px;
                font-size: 30px;
            }
            &:hover{
                background-color: #fff;
                color: #000;
                animation: ${pulseWhite} 1s ease infinite;
            }
        }
    }

`