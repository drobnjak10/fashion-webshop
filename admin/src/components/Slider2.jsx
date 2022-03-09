import { display } from '@mui/system'
import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, } from 'react-icons/ai'
import styled from 'styled-components'
import { sliderItems } from '../data'



const Container = styled.div({
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden'
})

const Arrow = styled.div(props => ({
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    top: '0',
    bottom: '0',
    margin: 'auto',
    left: props.direction === 'left' && '10px',
    right: props.direction === 'right' && '10px',
    cursor: 'pointer',
    zIndex: '2',
    opacity: '0.5'
}))

const Wrapper = styled.div(props => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    transform: `translateX(${props.slideIndex * -100}vw)`,
    transition: 'all 1.5s ease',

}))

const Slide = styled.div(props => ({
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    backgroundColor: `#${props.bg}`
}))

const ImgContainer = styled.div({
    flex: '1',
    height: '100%'
})

const Image = styled.img({
    height: '80vh'
})

const InfoContainer = styled.div({
    flex: '1'
})

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider2 = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const clickHandler = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        if (direction === 'right') {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => clickHandler('left')}>
                <AiOutlineArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => clickHandler('right')}>
                <AiOutlineArrowRight />
            </Arrow>
        </Container>
    )
}

export default Slider2