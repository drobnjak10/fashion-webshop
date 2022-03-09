import React from 'react'
import styled from 'styled-components';
import { Badge } from '@mui/material'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import ShoppingCartIcon from '@mui/material/Icon/Icon';
import {useSelector} from 'react-redux'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';



const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;


const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div({
  flex: '1',
  display: 'flex',
  alignItems: 'center',
})

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div({
  border: '0.5px solid lightgrey',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '25px',
  padding: '5px'
})

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div({
  flex: '1',
  textAlign: 'center',
  fontSize: '20px'
})

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  
  a {
    text-decoration: none;
    color: black;
  }
`;

const Navbar = () => {
  const { quantity } = useSelector(state => state.cart);
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <AiOutlineSearch style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{textDecoration: 'none', color:"#000"}}>
            <Logo>DAVID.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">Register</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">Login</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <AiOutlineShoppingCart style={{ fontSize: 22 }} />
            </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar