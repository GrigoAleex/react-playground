import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const Container = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2em;
    height: 800px;
    position: relative;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,.2) 0%, 
            rgba(0,0,0,.6) 100%
        ), linear-gradient(
            180deg, 
            rgba(0,0,0,.2) 0%, 
            transparent 100%
        );
        z-index: 2;
    }
`;

export const Background = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoPlayer = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: red;
`;

export const Content = styled.div`
    z-index: 3;
    max-width: 1300px;
    position: absolute; 
    padding: .5em 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 4rem;
    text-align: center;

    @media screen and (max-width: 679px) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }
`;

export const Paragraph = styled.p`
    margin-top: 2em;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 480px) {
        font-size: 1.25rem;
    }
`;

export const Button = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: .5em;
    margin-top: -2px;
    font-size: 1.25rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: .5em;
    margin-top: -2px;
    font-size: 1.25rem;
`;
