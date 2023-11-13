import { column_center, row_center } from "@/src/styles/mixin";
import styled from "styled-components";

export const ItemWrapper = styled.div`
    width: 100%;
    max-width: 200px;
    ${column_center};
    text-align: center;
    .icon{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: ${props => props.theme.bg_color_v2};
        ${row_center};
        margin-bottom: 10px;
        img{
            object-fit: contain;
        }
    }
    .title{
        min-height: 50px;
    }
    .count-value{
        color: ${props => props.theme.text_color_v2};
        margin-top: 10px;
        font-weight: 600;
        margin-bottom: 20px;
        font-size: 24px;
        @media (min-width: 992px){
            font-size: 30px;
        }
    }
`;