import { column_center, column_end, column_start, row_between, row_center } from "@/src/styles/mixin";
import styled from "styled-components";

export const TrainerDetailWrapper = styled.div`
    width: 100%;
    ${column_center};

    .image{
        position: relative;
        width: 100%;
        max-width: 550px;
        overflow: hidden;
        
        img{
            width: 100%;
            height: auto;
            max-height: 400px;
            object-fit: contain;
        }
        .hover-div{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(61, 84, 161, 0.9), rgba(61, 84, 161, 0.5));
            transition: all 0.2s;
            padding: 30px;
            color: #fff;
            opacity: 0;
            .name{
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 15px;
                transition: all 0.7s;
                opacity: 0;
                transform: translateX(300px);
            }
            .position{
                font-size: 22px;
                font-weight: 500;
                transition: all 1s;
                opacity: 0;
                transform: translateX(900px);
            }
        }
        &:hover{
            .hover-div{
                opacity: 1;
                .name,
                .position{
                    opacity: 1;
                    transform: translateX(0)
                }
            }
        }
    }
    .text{
        width: 100%;
        max-width: 600px;
        line-height: 24px;
        @media (min-width: 992px){
            font-size: 18px;
        }
    }
    .social-icons{
        width: 100%;
        ${row_center};
        margin-top: 20px;
        @media (min-width: 992px){
            justify-content: flex-start;
        }
        a{
            width: 40px;
            height: 40px;
            ${row_center};
            border-radius: 5px;
            background-color: ${props => props.theme.primary_color_v1};
            color: #fff;
        }
    }
`;