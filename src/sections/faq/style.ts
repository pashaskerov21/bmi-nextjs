import { column_center, row_between } from "@/src/styles/mixin";
import styled from "styled-components";

export const FaqAccordion = styled.div`
    width: 100%;
    ${column_center};
    border: 1px solid rgba(0,0,0, 0.1);
    border-radius: 10px;
    .accordion-item{
        width: 100%;
        ${column_center};
        &:last-child{
            .accordion-button{
                border-bottom: 0;
            }
        }
        .accordion-button{
            width: 100%;
            padding: 15px;
            ${row_between};
            cursor: pointer;
            border-bottom: 1px solid rgba(0,0,0, 0.1);
            .title{
                text-transform: capitalize;
                margin-right: 20px;
            }
            button{
                color: ${props => props.theme.primary_color_v2};
                font-size: 20px;
                transition: all 0.2s;
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
                padding: 20px 15px;
                border: 1px solid ${props => props.theme.bg_color_v3};
                border-top: none;
            }
        }
        &.active{
            .accordion-button{
                background-color:  ${props => props.theme.primary_color_v1};
                color: #fff;
                button{
                    color: #fff;
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