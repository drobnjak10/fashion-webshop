import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1({
    fontSize: '24px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
})

const Form = styled.form({
    display: 'flex',
    flexWrap: 'wrap'
})

const Input = styled.input({
    flex: '1',
    minWidth: '40%',
    margin: '20px 10px 0px 0px',
    padding: '10px'
})

const Agreement = styled.p({
    fontSize: '12px',
    fontWeight: '300',
    margin: '20px 0px'
})

const Button = styled.button({
    width: '40%',
    border: 'none',
    padding: '15px 20px',
    backgroundColor: 'teal',
    color: '#fff',
    cursor: 'pointer'
})

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with
                        the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register