import { column_align_start, column_center, row_center, row_justify_end } from "@/src/styles/mixin";
import styled from "styled-components";

export const TrainerCardWrapper = styled.div`
    width: 95%;
    max-width: 300px;
    ${column_center};
    .image{
        width: 100%;
        position: relative;
        overflow: hidden;
        img.trainer-img{
            width: 100%;
            max-height: 300px;
            object-fit: cover;
        }
        .linear-hover{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: linear-gradient(to bottom, rgba(61, 84, 161, 0.9), rgba(61, 84, 161, 0.1));
            transition: all 0.5s;
        }
        .icons{
            position: absolute;
            bottom: 0;
            right: 0;
            ${row_justify_end};
            .socials{
                ${row_justify_end};
                opacity: 0;
                transform: translateX(-500px);
                transition: all 0.3s;
                
                &.active{
                    transform: translateX(0);
                    opacity: 1;
                }
                a{
                    margin-right: 10px;
                }
            }
            .show-btn, a{
                width: 34px;
                height: 34px;
                background-color: ${props => props.theme.primary_color_v1};
                ${row_center};
                border-radius: 5px;
                color: #fff;
                font-size: 12px;
            }
        }
    }
    .info{
        width: 100%;
        ${column_align_start}
        padding: 25px 15px;
        transition: all 0.4s;
        border-radius: 5px;
        margin-top: 5px;
        z-index: 2;
        .name{
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        .position{
            font-size: 18px;
        }
        
    }
    &:hover{
        .image{
            .linear-hover{
                height: 100%;
            }
        }
        .info{
            box-shadow: 0 0 10px ${props => props.theme.text_color_v2};
        }
    }
`