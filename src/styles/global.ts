import { createGlobalStyle } from "styled-components";
import { column_align_start, column_between, column_center, row_center } from "./mixin";
import { backdropAnimation, preloaderAnimation } from "./animation";

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
        .black-backdrop{
            display: none;
        }
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
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        display: none;
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
            margin-bottom: 40px;
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
    &.other-events-slider,
    &.news-slider{
        padding-bottom: 30px;
    }
    &.news-slider{
        .slide-inner{
            padding: 5px;
        }
    }
    &.other-training-slider{
        padding-bottom: 30px;
        .slick-cloned{
            display: none;
        }
    }
    &.customer-slider,
    &.partner-slider{
        img{
            object-fit: contain;
        }
        @media (min-width: 768px){
            padding-bottom: 30px;
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

.black-backdrop{
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: rgba(0,0,0, 0.8);
    opacity: 0;
    animation: ${backdropAnimation} 0.3s ease forwards;
}


.form-control{
    width: 100%;
    ${column_align_start};
    position: relative;
    padding-bottom: 20px;
    &.invalid{
        input,
        textarea,
        select,
        .upload-btn{
            border-color: #dc3545 !important;
        }
    }
    label{
        font-weight: 500;
        margin-bottom: 8px;
        margin-left: 6px;
        font-size: 14px;
        @media (min-width: 992px){
            font-size: 16px;
        }
    }
    input,
    textarea{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ced4da;
        outline: none;
        background-color: ${props => props.theme.bg_color_v1};
        font-family: 'Montserrat', sans-serif;
        caret-color: ${props => props.theme.text_color_v1};
        font-size: 14px;
        @media (min-width: 992px){
            font-size: 16px;
            padding: 15px;
        }
        &::placeholder{
            font-weight: 600;
            color: ${props => props.theme.text_color_v1};
            opacity: 0.5;
            font-size: 14px;
            @media (min-width: 992px){
                font-size: 16px;
            }
        }
    }
    textarea{
        min-height: 150px;
        resize: none
    }
    .error{
        position: absolute;
        bottom: 0;
        left: 6px;
        font-size: 12px;
        font-weight: 600;
        color: #dc3545;
        @media (min-width: 992px){
            font-size: 12px;
        }
    }
    select{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ced4da;
        background-color: ${props => props.theme.bg_color_v1};
        color: ${props => props.theme.text_color_v1};
        font-family: 'Montserrat', sans-serif;
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 1em;
        font-size: 14px;
        @media (min-width: 992px){
            font-size: 16px;
        }
    }
    option{
        color: ${props => props.theme.text_color_v1};
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        @media (min-width: 992px){
            font-size: 16px;
        }
        &.placeholder{
            font-weight: 600;
            color: ${props => props.theme.text_color_v1};
            opacity: 0.5;
        }
    }
}
.form-control.file{
    .upload-btn{
        width: 100%;
        position: relative;
        padding: 20px;
        min-height: 100px;
        ${column_center};
        border: 1px solid #ced4da;
        border-radius: 5px;
        gap: 5px;
        .icon{
            color: ${props => props.theme.primary_color_v1};
            font-size: 50px;
        }
        .placeholder{
            font-weight: 600;
        }
        input{
            display: none;
        }
    }
}

`;

