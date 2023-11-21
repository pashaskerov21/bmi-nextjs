import { column_center, row_center } from "@/src/styles/mixin";
import styled from "styled-components";

export const GalleryButtons = styled.div`
    width: 100%;
    ${column_center};
    gap: 20px;
    margin-bottom: 30px;
    @media (min-width: 576px){
        ${row_center};
    }
    .btn{
        width: 100%;
        max-width: 300px;
        padding: 15px;
        border: 2px solid ${props => props.theme.text_color_v2};
        ${row_center};
        text-align: center;
        border-radius: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${props => props.theme.text_color_v2};
        font-weight: 600;
        cursor: pointer;
        &.active{
            background-color:  ${props => props.theme.bg_color_v4};
            color: ${props => props.theme.text_color_v3};
        }
    }
`