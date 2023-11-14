import { column_center, row_between, row_center } from "@/src/styles/mixin";
import styled from "styled-components";

export const TrainingContentWrapper = styled.div`
    width: 100%;
    ${column_center};
    .banner-img{
        width: 100%;
        margin-bottom: 10px;
        img{
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
        }
    }
    .heading{
        width: 100%;
        padding: 12px 0;
        ${row_between};
        .title{
            color: ${props => props.theme.text_color_v2};
            text-transform: capitalize;
            margin-right: 20px;
            @media (min-width: 992px){
                font-size: 30px;
            }
        }
        .status-badge{
            ${row_center};
            color: #fff;
            padding: 8px ;
            border-radius: 10px;
            @media (min-width: 768px){
                padding: 10px 15px;
            }
            img{
                display: block;
                object-fit: contain;
                margin-right: 8px;
                transform: scale(0.9);
                @media (min-width: 768px){
                    margin-right: 10px;
                    transform: scale(1);
                }
            }
            span{
                font-size: 14px;
                @media (min-width: 768px){
                    font-size: 16px;
                }
            }
            &.online{
                background-color: ${props => props.theme.primary_color_v2}
            }
            &.offline{
                background-color: ${props => props.theme.secondary_color}
            }
        }
    }
`