import { column_align_start, column_center, row_between, row_justify_start } from "@/src/styles/mixin";
import styled from "styled-components";

export const CareerAccordion = styled.div`
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
            gap: 15px;
            .heading{
                ${column_align_start};
                .title{
                    font-weight: 500;
                    margin-bottom: 20px;
                    @media (min-width: 992px){
                        font-size: 18px;
                    }
                }
                .bottom{
                    ${row_justify_start};
                    flex-wrap: wrap;
                    gap: 10px;
                    .item{
                        ${row_justify_start};
                        gap: 5px;
                        .icon{
                            @media (min-width: 992px){
                                font-size: 18px;
                            }
                            color: ${props => props.theme.primary_color_v1};
                        }
                        .label{
                            font-size: 14px;
                            @media (min-width: 992px){
                                font-size: 16px;
                            }
                        }
                    }
                }
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
                .apply-link{
                    margin-top: 20px;
                    display: block;
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
                }
            }
        }
        &.active{
            .accordion-button{
                background-color:  ${props => props.theme.primary_color_v1};
                color: #fff;
                .heading{
                    .bottom{
                        .item{
                            .icon{
                                color: #fff;
                            }
                        }
                    }
                }
                button{
                    color: #fff;
                    transform: rotate(-180deg);
                }
            }
            .accordion-body{
                max-height: 1000px;
                height: auto;
                overflow: auto;
                opacity: 1;
            }
        }
    }
    
`;

export const VacancyContentWrapper = styled.div`
    width: 100%;
    ${column_center};
    form{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
        @media (min-width: 992px){
            grid-template-columns: repeat(2,1fr)
        }
        button[type="submit"]{
            @media (min-width: 992px){
                grid-column: 1 / span 2;
                place-self: end;
            }
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
        .form-control.file{
            @media (min-width: 992px){
                grid-column: 1 / span 2;
            }
        }
    }
`;