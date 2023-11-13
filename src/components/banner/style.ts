import { pulseWhite } from "@/src/styles/animation";
import { column_center, row_center } from "@/src/styles/mixin";
import styled from "styled-components";


type BannerSlideProps = {
    $bgImage: string
}
export const SlideWrapper = styled.div<BannerSlideProps>`
    background-image: url(${props => props.$bgImage});
    width: 100%;
    min-height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .content{
        width: 100%;
        height: 100%;
        min-height: 400px;
        background-color: rgba(0,0,0, 0.5);
        padding: 50px;
        ${column_center};
        
        .title{
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 30px;
            font-size: 26px;
            max-width: 600px;
            @media (min-width: 992px){
                font-size: 40px;
                max-width: 500px;
            }
            /* @media (min-width: 1200px){
                font-size: 55px;
            } */
        }
        a.detail{
            ${row_center};
            text-align: center;
            color: #fff;
            padding: 15px 20px;
            width: 100%;
            max-width: 200px;
            border: 3px solid #fff;
            border-radius: 10px;
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            @media (min-width: 992px){
                font-size: 22px;
            }
            &:hover{
                background-color: #fff;
                color: rgba(0,0,0, 0.9);
                animation: ${pulseWhite} 1s ease infinite;
            }
        }
        .video-item{
            width: 100%;
            max-width: 400px;
            max-height: 300px;
            position: relative;
            border-radius: 10px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
            .hover{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                ${row_center};
                background-color: rgba(0,0,0, 0.5);
                border-radius: 10px;
                a{
                    width: 40px;
                    height: 40px;
                    color: #fff;
                    ${row_center};
                    border: 1px solid #fff;
                    border-radius: 50%;
                    @media (min-width: 992px){
                        width: 70px;
                        height: 70px;
                        font-size: 30px;
                    }
                    &:hover{
                        background-color: #fff;
                        color: #000;
                        animation: ${pulseWhite} 1s ease infinite;
                    }
                }
            }
        }
    }
`;