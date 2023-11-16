import { createGlobalStyle } from "styled-components";
import { column_between, column_center, row_center } from "./mixin";
import { preloaderAnimation } from "./animation";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: 1px solid red; */
}
html{
    scroll-behavior: smooth;
}

body{
    ${column_between}
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.bg_color_v1};
    color: ${props => props.theme.text_color_v1};
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
}
::-webkit-scrollbar{
    width: 10px; 
    height: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.primary_color_v1};
}
::-webkit-scrollbar-track{
    background-color: ${props => props.theme.bg_color_v1};
}
::selection {
    background: ${props => props.theme.text_color_v2};
    color: ${props => props.theme.bg_color_v1};
}
a, a:hover, a:active, a:visited {
    text-decoration: none;
    color: inherit;
}
ul{
  list-style: none;
}
button{
  background-color: transparent;
  border: none;
  outline: none;
}
header, main, section, footer{
  width: 100%;
}
header{
    min-height: 50px;
    ${column_center};
    @media (min-width: 992px){
        min-height: 150px;
    }
}
svg{
    display: block;
    user-select: none;
}
img{
    user-select: none;
    display:block;
}
input{
    border: none;
    outline: none;
    &::placeholder{
        user-select: none;
    }
}
.swiper{
    width: 100%;
    .swiper-slide{
        ${row_center}
    }
    .swiper-pagination-bullet{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: ${props => props.theme.text_color_v2}
    }
    &.trainingcategory-swiper{
        padding: 50px 0;
    }
    &.pagination-secondary{
        .swiper-pagination-bullet{
            background-color: #fff;
        }
    }
    &.training-swiper{
        padding: 50px 0;
        .swiper-button-prev,
        .swiper-button-next{
            &::after{
                display: none
            }
        }
        .arrow-btn{
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #fff;
            ${row_center};
            color: ${props => props.theme.primary_color_v1};
            font-size: 22px;
            display: none;
            svg{
                width: auto;
                height: auto;
            }
            @media (min-width: 768px){
                display: flex;
            }
        }
        .training-control{
            position: absolute;
            top: 65px;
            right: 0;
            ${column_center};
            min-width: 140px;
            gap: 25px;
            @media (min-width: 768px){
                min-width: 160px;
            }
            .custom-btn{
                position: relative;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #fff;
                min-height: 40px;
                ${row_center};
                border-radius: 10px;
                color: ${props => props.theme.primary_color_v1};
                font-weight: 600;
                font-size: 12px;
                padding: 10px;
                user-select:none;
                @media (min-width: 768px){
                    font-size: 14px;
                }
                svg{
                    width: auto;
                    height: auto;
                    padding: 0 10px;
                    user-select:none;
                }
            }
        }
    }
    &.trainer-swiper{
        padding-bottom: 50px;
        .swiper-pagination-bullet{
            background-color: ${props => props.theme.text_color_v2}
        }
    }
    &.events-swiper{
        padding-bottom: 50px;
    }
    &.other-events-swiper{
        padding-bottom: 40px;
    }
}
// helpers display
.d{
    &-none{
        display: none !important;
    }
    &-sm-none{
        @media (min-width: 576px){
            display: none !important;
        }
    }
    &-md-none{
        @media (min-width: 768px){
            display: none !important;
        }
    }
    &-lg-none{
        @media (min-width: 992px){
            display: none !important;
        }
    }
    &-xl-none{
        @media (min-width: 1200px){
            display: none !important;
        }
    }
    &-xxl-none{
        @media (min-width: 1400px){
            display: none !important;
        }
    }
    &-block{
        display: block !important;
    }
    &-sm-block{
        @media (min-width: 576px){
            display: block !important;
        }
    }
    &-md-block{
        @media (min-width: 768px){
            display: block !important;
        }
    }
    &-lg-block{
        @media (min-width: 992px){
            display: block !important;
        }
    }
    &-xl-block{
        @media (min-width: 1200px){
            display: block !important;
        }
    }
    &-xxl-block{
        @media (min-width: 1400px){
            display: block !important;
        }
    }
    &-flex{
        display: flex !important;
    }
    &-sm-flex{
        @media (min-width: 576px){
            display: flex !important;
        }
    }
    &-md-flex{
        @media (min-width: 768px){
            display: flex !important;
        }
    }
    &-lg-flex{
        @media (min-width: 992px){
            display: flex !important;
        }
    }
    &-xl-flex{
        @media (min-width: 1200px){
            display: flex !important;
        }
    }
    &-xxl-flex{
        @media (min-width: 1400px){
            display: flex !important;
        }
    }
}

// social icons
.social-icons{
    ${row_center}
    a{
        transition: 0.3s;
        margin-right: 15px;
        line-height: 0;
        &:last-child{ 
            margin-right: 0;
        }
    }
}


.slick-slider{
    width: 100%;
    overflow: hidden;
    
    .slick-track{
        margin: 0;   
    }
    .slick-slide {
        padding: 0 10px;
    }
    .slick-list {
        margin: 0 -10px;
        padding: 5px 0;
    }
    .slide-inner{
        display: flex !important;
        justify-content: center  !important;
    }
    &.grid-slider{
        padding-bottom: 0;
        .slide-inner{
            margin: 40px 0;
        }
    }
    .slick-dots{
        bottom: 0;
        li{
            margin: 0 1px;
            button{
                &::before{
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background-color: ${props => props.theme.text_color_v2};                    
                    color: transparent !important;
                }
            }
        }
    }
    &.pagination-secondary{
        .slick-dots{
            li{
                button{
                    &::before{
                        background-color: #fff;
                    }
                }
            }
        }
    }
    &.banner-slider{
        .slick-slide{
            padding: 0;
        }
    }
    &.training-category-slider{
        @media (min-width: 576px){
            padding-bottom: 30px;
        }
    }
    &.training-modal-slider{
        padding: 40px 0;
    }
    &.trainer-slider,
    &.event-gallery-slider,
    &.other-events-slider{
        padding-bottom: 30px;
    }
    &.other-training-slider{
        padding-bottom: 30px;
        .slick-cloned{
            display: none;
        }
    }
}

.preloader{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.bg_color_v1};
    z-index: 99999;
    ${row_center};
    /* opacity: 0.7; */
    &::after{
        content: '';
        border-top: 5px solid ${props => props.theme.primary_color_v1};
        border-right: 5px solid ${props => props.theme.primary_color_v1};
        border-radius: 50%;
        ${row_center};
        
        width: 180px;
        height: 180px;
        animation: ${preloaderAnimation} 0.7s linear infinite;
        @media (min-width: 992px){
            border-width: 7px;
        }
    }
}

`;

