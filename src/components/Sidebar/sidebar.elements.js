import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as routerLink } from "react-router-dom";
import { Link as scrollLink } from "react-scroll";

export const Container = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(10px);
    display: grid;
    align-items: center;
    opacity: ${ ({isOpen}) => (isOpen ? '100%' : '0') };
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    left: 0;
    transition: .2s ease-in-out;
`;

export const Icon = styled.div`
    position: absolute; 
    top: 1.2em;
    right: 1.2em;
    cursor: pointer;
    outline: none;
    font-size: 2em;
`; 

export const CloseIcon = styled(FaTimes)`
    color: #fff;

    &:hover {
        transform: rotate(360deg);
        transition: 1s all ease-in-out; 
    }
`;

export const Wrapper = styled.div`
    color: #fff;
`;

export const Menu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 120px);
    text-align: center;

    @media screen and (max-width: 679px) {
        grid-template-rows: repeat(6, 80px);
    }
`;

export const MenuLink = styled(scrollLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    $:hover {
        color: (--green);
        transition: .2s ease-in-out;
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonLink = styled(routerLink)`
    border-radius: 50px;
    background: var(--green);
    white-spcae: nowrap; 
    padding: 1em 4em;
    color: #fff;
    outline: none;
    border: none;
    text-decoration: none;

    &:hover {
        transition: .2s all ease-in-out;
        background: var(--green-light);
        color: #000;
    }
`;