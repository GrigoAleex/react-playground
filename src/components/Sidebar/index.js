import React from 'react'
import { 
    Container,
    Icon,
    CloseIcon,
    Wrapper,
    Button,
    ButtonLink,
    Menu,
    MenuLink,
} from "./sidebar.elements.js";

function Sidebar({isOpen, toggle}) {
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon> <CloseIcon /> </Icon>
            <Wrapper>
                <Menu>
                    <MenuLink to="about"> Despre </MenuLink>
                    <MenuLink to="discover"> Descoperă </MenuLink>
                    <MenuLink to="login"> Intră în cont </MenuLink>
                </Menu>
                <Button>
                    <ButtonLink to="/register"> Creează cont </ButtonLink>
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
