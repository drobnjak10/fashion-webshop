import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div({
    height: '60vh',
    backgroundColor: '#fcf5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
})

const Title = styled.h1({
    fontSize: '70px',
    marginBottom: '20px'
})

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input({
    border: 'none',
    fontSize: '20px',
    padding: '10px',
    flex: 8
})

const Button = styled.button({
    flex: '1',
    border: 'none',
    backgroundColor: 'teal',
    color: '#FFF'
})

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products</Desc>
        <InputContainer>
            <Input placeholder='Enter your email' type={'email'} />
            <Button>
                <AiOutlineSend />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter