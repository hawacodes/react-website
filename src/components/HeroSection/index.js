import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElements'

const HeroSection= () =>{
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>HawaGames New Addition to the Gaming Industry</HeroH1>
                <HeroP>
                    Sign up for a new account! News about HawaCodes and HawaGames are coming soon. Learn more about the creator: Havva Beyza Özlüoğlu.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave= {onHover} primary="true" dark="true">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
