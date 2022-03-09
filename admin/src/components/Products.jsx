import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div({
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
})

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( cat ?  `http://localhost:5000/api/product/?category=${cat}` 
                                         :   `http://localhost:5000/api/product/` )

        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [cat])

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key,value]) => {
          return item[key].includes(value)
        })
      )
    )
  }, [cat, filters, products])
  
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
 

  console.log(filteredProducts)
  
  return (
    <Container>
      { cat 
          ? filteredProducts.map(item => <Product item={item} key={item.id} /> )
          : products.slice(0,8).map(item => <Product item={item} key={item.id} /> )
      }
    </Container>
  )
}

export default Products