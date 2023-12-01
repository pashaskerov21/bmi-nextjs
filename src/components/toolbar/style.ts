import { column_align_start, column_center, column_justify_start, row_between, row_center, row_justify_start } from "@/src/styles/mixin";
import styled from "styled-components";
import { ApplyFormikWrapper } from "../form/style";

export const ToolbarButtonWrapper = styled.div`
    position: fixed;
    top: 50%;
    right: -250px;
    transform: translateY(-50%);
    z-index: 900;
    width: 300px;
    ${column_center};
    gap: 10px;
    .toolbar-button{
        width: 100%;
        ${row_justify_start};
        border-radius: 10px 0 0 10px;
        transition: all 0.3s;
        cursor: pointer;
        @media (min-width: 992px){
            transform: translateX(-170px);
        }
        .icon{
            padding-left: 5px;
            img{
                object-fit: contain;
            }
        }
        .label{
            padding: 12px 7px;
            width: 100%;
            color: #fff;
            opacity: 0;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 13px;
            user-select: none;
            @media (min-width: 992px){
                opacity: 1;
            }
        }
        &.apply{
            background-color: ${props => props.theme.secondary_color}
        }
        &.training{
            background-color: ${props => props.theme.primary_color_v2}
        }
        &.active{
            transform: translateX(-170px);
            .label{
                opacity: 1;
            }
        }
    }
`;

type CanvasProps = {
    $active: boolean,
}

export const CanvasWrapper = styled.div<CanvasProps>`
    position: fixed;
    top: 0;
    right: ${props => props.$active ? '0' : '-100%'};
    width: 100%;
    max-width: 400px;
    background-color: ${props => props.theme.bg_color_v1};
    z-index: 999;
    ${column_justify_start};
    transition: all 0.3s;
    max-height: 100vh;
    @media (min-width: 992px){
        max-width: 500px;
    }
    .canvas-content{
        width: 100%;
        min-height: 100vh;
        max-height: 100vh;
        overflow: auto;
        ${column_justify_start};
        padding: 12px;
        @media (min-width: 992px){
            padding: 15px 25px;
        }
        .header{
            width: 100%;
            ${row_between};
            margin-bottom: 15px;
            padding: 10px 0;
            @media (min-width: 992px){
                margin-bottom: 30px;
            }
            .title{
                text-transform: capitalize;
                font-size: 22px;
                @media (min-width: 576px){
                    font-size: 26px
                }
                @media (min-width: 1200px){
                    font-size: 30px
                }
            }
            .close-button{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                ${row_center};
                font-size: 18px;
                border: 2px solid transparent;
                transition: all 0.2s;
                margin-left: 20px
            }
        }
        .body{
            width: 100%;
        }
        &.apply{
            &::-webkit-scrollbar-thumb{
                background-color: ${props => props.theme.secondary_color};
            }
            &::-webkit-scrollbar-track{
                background-color: ${props => props.theme.bg_color_v1};
            }
            .header{
                .title{
                    color: ${props => props.theme.text_color_v4};
                }
                .close-button{
                    border-color: ${props => props.theme.text_color_v4};
                    color: ${props => props.theme.text_color_v4};
                    &:hover{
                        background-color: ${props => props.theme.text_color_v4};
                        color: ${props => props.theme.bg_color_v1};
                    }
                }
            }
            ${ApplyFormikWrapper}{
                form{
                    ${column_center};
                    gap: 15px;
                }
                button[type="submit"]{
                    background-color: ${props => props.theme.secondary_color};
                }
            }
            
        }
        &.training{
            .header{
                .title{
                    color: ${props => props.theme.text_color_v2};
                }
                .close-button{
                    border-color: ${props => props.theme.text_color_v2};
                    color: ${props => props.theme.text_color_v2};
                    &:hover{
                        background-color: ${props => props.theme.text_color_v2};
                        color: ${props => props.theme.bg_color_v1};
                    }
                }
            }
            .trainings-container{
                width: 100%;
                ${column_center};
                gap: 10px;
                .popular-card{
                    width: 95%;
                    ${column_align_start};
                    padding: 20px;
                    border-radius: 10px;
                    transition: all 0.3s;
                    &:hover{
                        box-shadow: 0 0 10px ${props => props.theme.text_color_v2};
                    }
                    .image{
                        width: 100%;
                        height: 150px;
                        margin-bottom: 15px;
                        @media (min-width: 992px){
                            height: 250px;
                        }
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .title{
                        font-size: 16px;
                        font-weight: 600;
                        text-transform: capitalize;
                        color: ${props => props.theme.text_color_v2};
                        @media (min-width: 992px){
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    } 
`;