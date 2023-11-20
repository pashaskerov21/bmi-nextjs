import { column_align_start, column_center, row_center } from "@/src/styles/mixin";
import styled from "styled-components";

export const NewsCardWrapper = styled.div`
    width: 100%;
    max-width: 370px;
    padding: 15px;
    ${column_center};
    border-radius: 5px;
    transition: all 0.3s;
    margin: 3px 0;
    @media (min-width: 768px){
        margin: 5px;
    }
    &:hover{
        box-shadow: 0 0 5px ${props => props.theme.text_color_v2};
    }
    .image{
        width: 100%;
        height: 200px;
        margin-bottom: 15px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }
    .content{
        width: 100%;
        ${column_align_start};
        .title{
            margin-bottom: 10px;
            text-transform: capitalize;
            font-weight: 600;
            color: ${props => props.theme.text_color_v2};
        }
        .text{
            width: 100%;
            font-size: 14px;
        }
        a{
            margin-top: 20px;
            padding: 12px;
            width: 100%;
            max-width: 200px;
            border: 2px solid ${props => props.theme.text_color_v2};
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            ${row_center};
            color: ${props => props.theme.text_color_v2};
            transition: all 0.3s;
            text-transform: uppercase;
            letter-spacing: 1px;
            &:hover{
                background-color: ${props => props.theme.text_color_v2};
                color: ${props => props.theme.bg_color_v2};
            }
        }
    }
`;