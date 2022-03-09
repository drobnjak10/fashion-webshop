import React from 'react'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Info = styled.div({
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'ease .5s all',
    cursor: 'pointer',
})

const Container = styled.div`
  flex: 20%;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;



const Circle = styled.div({
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    backgroundColor: 'white',
    position: 'absolute',

})

const Image = styled.img({
    height: '75%',
    zIndex: 2,
})


const Icon = styled.span({
    width: '40px',
    height: '40px',
    fontSize: '26px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    ":hover": {
        backgroundColor: '#e9f5f5',
        transform: 'scale(1.1)',
    }
})

const Product = ({ item }) => {
    
    return (
        <Container>
            <Circle />
            <Image src={item.img} alt={item.id} />
            <Info>
                <Icon>
                    <AiOutlineShoppingCart />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <AiOutlineSearch />
                    </Link>
                </Icon>
                <Icon>
                    <AiOutlineHeart />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product