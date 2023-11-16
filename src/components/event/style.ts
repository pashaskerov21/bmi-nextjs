import { pulseWhite } from "@/src/styles/animation";
import { column_align_start, column_center, row_center, row_justify_start } from "@/src/styles/mixin";
import styled from "styled-components";

export const EventCardWrapper = styled.div`
    width: 100%;
    max-width: 420px;
    position: relative;
    min-height: 200px;
    max-height: 350px;
    img{
        &.cover{
            width: 100%;
            height: 100%;
            max-height: 350px;
            object-fit: cover;
        }
        &.logo{
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            object-fit: contain;
            width: auto;
            height: auto;
            max-width: 120px;
            max-height: 120px;

        }
    }
    .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        ${row_center};
        overflow: hidden;
        transition: all 0.2s;
        a{
            ${row_center};
            padding: 15px 30px;
            max-width: 90%;
            color: #fff;
            font-size: 18px;
            font-family: 600;
            border: 2px solid #fff;
            border-radius: 5px;
            text-align: center;
            text-transform: capitalize;
            opacity: 0;
            transform: translateY(-500px);
            transition: all 0.4s;
            min-height: 50px;
            min-width: 150px;
            &:hover{
                animation: ${pulseWhite} 1s ease infinite;
                background-color: #fff;
                color: #000;
            }
        }
    }
    &:hover{
        .content{
            background-color: rgba(0,0,0,0.7);
            a{
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
`;

export const EventCardSecondWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 15px;
    ${column_center};
    transition: all 0.3s;
    margin: 10px 3px;
    .image{
        width: 100%;
        height: 200px;
        margin-bottom: 20px;
        position: relative;
        .hover{
            position: absolute;
            top: 0; 
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            transition: all 0.3s;
            ${row_center};
            opacity: 0;
            a{
                padding: 12px;
                font-size: 18px;
                min-width: 130px;
                ${row_center};
                text-align: center;
                color: #fff;
                border: 2px solid #fff;
                border-radius: 5px;
                font-weight: 500;
                text-transform: capitalize;
                &:hover{
                    background-color: #fff;
                    color: #000;
                    animation: ${pulseWhite} 1s ease infinite;
                }
            }
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .title{
        color: ${props => props.theme.text_color_v2};
        width: 100%;
        margin-bottom: 20px;
        text-transform: capitalize;
    }
    .icons{
        width: 100%;
        gap: 15px;
        ${column_align_start};
        .item{
            ${row_justify_start};
            svg{
                font-size: 22px;
                transition: all 0.3s;
            }
            span{
                margin-left: 10px;
                font-size: 18px;
                line-height: 18px;
            }
        }
    }
    &:hover{
        box-shadow: 0 0 5px ${props => props.theme.text_color_v2};
        .image{
            .hover{
                opacity: 1;
            }
        }
        .icons{
            .item{
                svg{
                    color: ${props => props.theme.text_color_v2};
                }
            }
        }
    }
`;