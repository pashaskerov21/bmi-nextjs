import { column_center, row_center } from "@/src/styles/mixin";
import styled from "styled-components";

export const ErrorWrapper = styled.div`
    width: 100%;
    ${column_center};
    padding: 20px;
    .error-code{
        font-size: 50px;
        font-weight: 500;
        color: ${props => props.theme.text_color_v2};
        @media (min-width: 768px){
            font-size: 100px;
        }
        @media (min-width: 1200px){
            font-size: 120px;
        }
    };
    .message{
        padding: 15px 0;
        font-size: 18px;
        @media (min-width: 768px){
            font-size: 22px;
        }
        @media (min-width: 1200px){
            font-size: 28px;
        }
    };
    a{
        width: 100%;
        max-width: 250px;
        ${row_center};
        padding: 15px;
        font-size: 20px;
        border-radius: 5px;
        background-color: ${props => props.theme.text_color_v2};
        color: ${props => props.theme.text_color_v3} !important;
        margin-top: 15px;
    }
`;