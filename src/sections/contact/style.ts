import { column_align_start, column_center, column_justify_start, row_between, row_justify_start } from "@/src/styles/mixin";
import styled from "styled-components";

export const ContactWrapper = styled.div`
    width: 100%;
    ${column_center};
    border: 1px solid rgba(0,0,0,0.1);
    @media (min-width: 992px){
        ${row_between};
        align-items: stretch;
    }
    .left{
        width: 100%;
        ${column_justify_start};
        border-bottom: 1px solid rgba(0,0,0,0.1);
        @media (min-width: 992px){
            width: 50%;
            border-bottom: 0;
            border-right: 1px solid rgba(0,0,0,0.1);
        }
        @media (min-width: 1200px){
            width: 60%;
        }
    }
    .right{
        width: 100%;
        ${column_justify_start};
        @media (min-width: 992px){
            width: 50%;
        }
        @media (min-width: 1200px){
            width: 40%;
        }
    }
    .contact-info{
        width: 100%;
        ${column_align_start};
        background-color: ${props => props.theme.primary_color_v1};
        padding: 25px 15px;
        gap: 20px;
        @media (min-width: 768px){
            ${row_between};
        }
        @media (min-width: 992px){
            ${column_align_start};
        }
        @media (min-width: 1200px){
            ${row_between};
        }
        .contact-item{
            width: 100%;
            ${row_justify_start};
            color: #fff;
            gap: 10px;
            @media (min-width: 1200px){
                ${column_center};
                gap: 15px;
                border-right: 2px solid #fff;
                &:last-child{ 
                    border: none;
                }
            }
            .icon{
                font-size: 18px;
                @media (min-width: 1200px){
                    font-size: 24px;
                }
            }
            .label{
                font-weight: 500;
            }
        }
    }
    .map{
        width: 100%;
        height: 100%;
        iframe{ 
            width: 100%;
            height: 100%;
            min-height: 300px;
            border: 0;
            @media (min-width: 1200px){
                min-height: 450px;
            }
        }
    }
    .application-form{
        width: 100%;
        ${column_align_start};
        padding: 20px;
        .title{
            margin-bottom: 30px;
        }
        form{
            width: 100%;
            ${column_align_start};
            gap: 10px;
            button[type="submit"]{
                margin-top: 10px;
                width: 100%;
                max-width: 300px;
                padding: 15px;
                background-color: ${props => props.theme.primary_color_v1};
                color: #fff;
                font-size: 18px;
                font-weight: 600;
                text-transform: capitalize;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s;
                text-align: center;
                font-family: 'Montserrat', sans-serif;
                &:hover{
                    background-color: ${props => props.theme.primary_color_v2};
                }
                &:disabled{
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }
    }
`;