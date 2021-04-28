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
                    <MenuLink to="discover"> Descopera </MenuLink>
                    <MenuLink to="login"> Intra in cont </MenuLink>
                </Menu>
                <Button>
                    <ButtonLink to="/register"> Creeaza cont </ButtonLink>
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
