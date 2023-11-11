import styled, { css } from "styled-components";
import { column_center, column_end, column_start, row_between } from "../mixin";


export const RowCol = styled.div`
    width: 100%;
    height: 100%;
    ${column_center};
    text-align: center;    
`

interface RowProps {
    $content?: string,
}

export const Row = styled.div<RowProps>`
    width: 100%;
    ${column_center};
    gap: 40px;
    @media (min-width: 992px){
        ${row_between};
    }
    ${props => (props.$content === undefined || props.$content === 'left') && css`
        ${RowCol}{
            @media (min-width: 992px){
                width: 47%;
                align-self: stretch;
                &:nth-child(odd){
                    ${column_start};
                    text-align: start;
                }
                &:nth-child(even){
                    ${column_end};
                    text-align: end;
                }
            }
        }`
    }
    ${props => props.$content === 'right' && css`
        ${RowCol}{
            @media (min-width: 992px){
                width: 47%;
                align-self: stretch;
                ${column_start};
                text-align: start;
            }
            @media (min-width: 1200px){
                &:nth-child(odd){
                    width: 40%;
                }
                &:nth-child(even){
                    width: 57%;
                }
            }
        }
    `}
`;


