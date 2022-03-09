import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { IoMdContact } from 'react-icons/io'
import { BsFillTelephoneFill } from 'react-icons/bs'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div({
    flex: 1,
    padding: '20px'
})

const Logo = styled.h1({

})

const Desc = styled.p({
    margin: '20px 0px',
})

const SocialContainer = styled.div({
    display: 'flex'
})

const SocialIcon = styled.div(props => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '22px',
    background: `#${props.color}`,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px'
}))

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3({
    marginBottom: "30px"
})

const List = styled.ul({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
})

const ListItem = styled.li({
    width: '50%',
    marginBottom: '10px'
})


const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div({
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center'
})

const Payment = styled.img({

})

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>David.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look event slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <AiFillFacebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <AiFillInstagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <AiFillTwitterCircle />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <AiFillLinkedin />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <GoLocation />  622 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <BsFillTelephoneFill /> +1 389-96567
                </ContactItem>
                <ContactItem>
                    <IoMdContact /> drobnjakdavid@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer