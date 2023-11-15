'use client'
import React from 'react'
import styled from 'styled-components'
import { FaArrowUp } from 'react-icons/fa'
import { row_center } from '../styles/mixin';

const ScrollButtonWrapper = styled.div`
    ${row_center};
    width: 50px;
    height: 50px;
    border-radius: 10px;
    position: fixed;
    bottom: 30px;
    right: 20px;
    background-color: ${props => props.theme.text_color_v2};
    color: ${props => props.theme.bg_color_v1};
    font-size: 20px;
    box-shadow: 0 0 5px #fff;
    z-index: 9999;
    svg{
        display: block;
    }
`;

const ScrollButton: React.FC = () => {
    const [show, setShow] = React.useState<boolean>(false);
    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            if (this.scrollY > 500) {
                setShow(true);
            } else {
                setShow(false)
            }
        });

        return () => {
            window.removeEventListener('scroll', () => { });
        }
    }, []);
    return (
        <React.Fragment>
            {show ? (
                <ScrollButtonWrapper onClick={() => window.scrollTo(0, 0)}>
                    <FaArrowUp />
                </ScrollButtonWrapper>
            ) : null}

        </React.Fragment>
    )
}

export default React.memo(ScrollButton)
