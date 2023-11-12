import { column_center, column_justify_start, column_start, row_center, row_justify_start } from "@/src/styles/mixin";
import styled from "styled-components";

export const FooterTop = styled.div`
    background-color: ${props => props.theme.primary_color_v3};
    padding: 80px 0;
    .top-grid{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        place-items: center;

        gap: 40px;  
        @media (min-width: 768px){
            grid-template-columns: repeat(3,1fr);
            .grid-item{
                &:first-child{
                    grid-column: 1/ span 3
                }
            }
        }
        @media (min-width: 1200px){
            grid-template-columns: repeat(4,1fr);
            .grid-item{
                &:first-child{
                    grid-column: 1/ span 1
                }
            }
        }
        @media (min-width: 1400px){
            .logo{
                width: 100%;
                max-width: 400px;
                img{
                    width: 100%;
                    height: auto;
                    max-height: 240px;
                }
            }
            grid-template-columns: repeat(5,1fr);
            .grid-item{
                &:first-child{
                    grid-column: 1/ span 2;
                    place-self: start;
                }
            }
        }
    }
    .footer-links{
        width: 100%;
        ${column_justify_start}
        color: #fff;
        height: 100%;
        @media (min-width: 768px){
            ${column_start}
        }
        @media (min-width: 992px){
            width: 70%;
        }
        @media (min-width: 1200px){
            width: 80%;
        }
        .title{
            margin-bottom: 15px;
        }
        a{
            text-transform: capitalize;
            margin-bottom: 7px;
        }
        .contact{
            margin-bottom: 15px;
            a{
                text-transform: none;
                ${row_justify_start};
                margin-bottom: 15px;
                .icon{
                    margin-right: 10px;
                }
            }
        }
    }
`;

export const FooterBottom = styled.div`
    background-color: ${props => props.theme.primary_color_v1};
    padding: 40px 0;
    .inner{
        width: 100%;
        color: #fff;
        text-align: center;
        ${row_center};
        padding: 0 12px;
        font-size: 18px;
        font-weight: 500;
    }
`;