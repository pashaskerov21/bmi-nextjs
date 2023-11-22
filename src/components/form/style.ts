import styled from "styled-components";

export const ApplyFormikWrapper = styled.div`
    form{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        gap: 20px;
        @media (min-width: 992px){
            grid-template-columns: repeat(2,1fr)
        }
    }
    button[type="submit"]{
        @media (min-width: 992px){
            grid-column: 1 / span 2;
        }
        width: 100%;
        max-width: 300px;
        padding: 15px;
        background-color: ${props => props.theme.primary_color_v1};
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        text-transform: capitalize;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        &:hover{
            background-color: ${props => props.theme.primary_color_v2};
        }
        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`;