import { keyframes } from "styled-components";

export const pulsePrimary = keyframes`
    0% {box-shadow: 0 0 0 0 #193263}
    80% {box-shadow: 0 0 0 10px rgba(255, 134, 134, 0);}
    100% {box-shadow: 0 0 0 0 rgba(255, 134, 134, 0);}
`;
export const pulseWhite = keyframes`
    0% {box-shadow: 0 0 0 0 #fff}
    80% {box-shadow: 0 0 0 10px rgba(255, 134, 134, 0);}
    100% {box-shadow: 0 0 0 0 rgba(255, 134, 134, 0);}
`;



export const backdropAnimation = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 100;
    }
`
export const fixHeaderAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-100%);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`
export const preloaderAnimation = keyframes`
0% {
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg)
}
`