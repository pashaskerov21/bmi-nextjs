import { column_align_start, column_center, row_center } from "@/src/styles/mixin";
import styled from "styled-components";


export const NewsContentWrapper = styled.div`
    width: 100%;
    ${column_center};
    .content-image{
        width: 100%;
        max-width: 600px;
        img{
            width: 100%;
            height: auto;
            max-height: 600px;
            object-fit: cover;
        }
    }
    .title{
        text-transform: capitalize;
        margin-bottom: 12px
    }
    .icons{
        width: 100%;
        ${column_center};
        gap: 12px;
        @media (min-width: 992px){
            ${column_align_start};
        }
        .item{
            ${row_center};
            svg{
                font-size: 24px;
                color: ${props => props.theme.text_color_v2}
            }
            span{
                line-height: 18px;
                font-size: 18px;
                font-weight: 500;
                margin-left: 10px
            }
        }
    }
    .text{
        font-size: 14px;
        line-height: 25px;
        margin-top: 20px;
        @media (min-width: 1200px){
            font-size: 16px;
        }
    }
`;