import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import CategoryItem from './CategoryItem'

function Categories(props) {
    const categories = props.categories
  return (
    <Box><Heading ml={3} color={'green.900'} size={'md'} fontWeight={'semibold'}> Categories </Heading>
    { categories.map((category)=>{
     return <CategoryItem category={category}/>
    }) }</Box>
  )
}

export default Categories