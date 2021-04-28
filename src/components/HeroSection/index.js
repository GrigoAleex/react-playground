import React, { useState } from 'react'
import Video from "../../videos/background.mp4";
import { Action } from "../Action.js"
import { 
    Container, 
    Background, 
    VideoPlayer,
    Content,
    Button,
    Title,
    Paragraph,
    ArrowForward,
    ArrowRight,
} from "./hero.elements.js";

function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <Container>
            <Background>
                <VideoPlayer autoPlay loop muted src={Video} type="/video/mp4"/>
            </Background>
            <Content>
                <Title>Intretinerea meniurilor facuta usoara</Title>
                <Paragraph>
                    Înregistrează-ți acum afacerea pentru a-ți face viața mai usoară. Nu mai trebuie să arunci sute de lei pe meniuri periodic!
                </Paragraph>
                <Button>
                    <Action to="register" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary="true"
                    > 
                        Inregistrează restaurantul
                        {hover ? <ArrowForward /> : <ArrowRight />} 
                    </Action>
                </Button>
            </Content>
        </Container>
    )
}

export default HeroSection
