import { row_center } from "@/src/styles/mixin";
import styled from "styled-components";

export const ReportWrapper = styled.div`
    width: 100%;
    ${row_center};
    flex-wrap: wrap;
    gap: 40px;
    @media (min-width: 1400px){
        justify-content: space-between;
    }
`;