import { Section } from "@/src/styles/utils";
import styled from "styled-components";

export const ApplySectionWrapper = styled.div`
    ${Section}{
        background-color: ${props => props.theme.bg_color_v3};
    }
`