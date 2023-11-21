import { pulseWhite } from "@/src/styles/animation";
import { row_center } from "@/src/styles/mixin";
import styled from "styled-components";

export const PhotoWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 576px){
        grid-template-columns: repeat(2,1fr);
    }
    @media (min-width: 992px){
        grid-template-columns: repeat(3,1fr);
    }
    .image{
        width: 100%;
        height: 300px;
        position: relative;
        @media (min-width: 576px){
            height: 200px
        }
        @media (min-width: 992px){
            height: 300px
        }
        .layer{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0,0,0,0.4);
            ${row_center};
            transition: 0.2s;
            overflow: hidden;
            &:hover{
                background-color: rgba(0,0,0,0.7);
                a{
                    opacity: 1;
                    transform: translateY(0);
                    animation: ${pulseWhite} 1s ease infinite;
                }
            }
            a{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 2px solid #fff;
                ${row_center};
                color: #fff;
                font-size: 18px;
                opacity: 0;
                transform: translateY(-100px);
                transition: 0.3s;
            }
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const VideoWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 40px;
    @media (min-width: 768px){
        grid-template-columns: repeat(2,1fr);
    }
    @media (min-width: 992px){
        grid-template-columns: repeat(3,1fr);
    }
    .video{
        width: 100%;
        max-width: 400px;
        height: 300px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .layer{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0,0,0,0.3);
            ${row_center};
            transition: 0.2s;
            overflow: hidden;
            &:hover{
                background-color: rgba(0,0,0,0.6);
                a{
                    animation: ${pulseWhite} 1s ease infinite;
                }
            }
            a{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 2px solid #fff;
                ${row_center};
                color: #fff;
                font-size: 18px;
                transition: 0.3s;
            }
        }
    }
`