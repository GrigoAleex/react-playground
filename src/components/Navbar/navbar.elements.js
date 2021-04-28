import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";
import { Link as scrollLink } from "react-scroll";

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: .2s all ease;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    padding: 0 2em;
`;

export const Logo = styled(routerLink)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-left: 2em;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 769px) {
        display: block;
        postion: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 30%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 769px) {
        display:none;
    }
`;

export const MenuItem = styled.li`
    height: 80px;
`;

export const MenuLink = styled(scrollLink)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1em;
    height: 100%;
    cursor: pointer;

    &:hover, &.active {
        transition: .1s all ease;
        border-bottom: 3px solid var(--green);
    }
`;

export const Button = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 769px) {
        display: none;
    }
`;

export const ButtonLink = styled(routerLink)`
    border-radius: 50px;
    background: var(--green);
    white-spcae: nowrap; 
    padding: 1em 2em;
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
