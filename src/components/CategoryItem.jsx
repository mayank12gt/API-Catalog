import { Box, Card, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem(prop) {
  return (
    <Link to={`/category/${prop.category}`}>
    <Card  onClick={()=>{prop.onClose()}}  bgColor={'green.500'} p={2} m={3} variant={'filled'}>
        <Text  fontSize={{base:'md',md:'sm'}} color={'white'} fontWeight={'semibold'} ml={4}>{prop.category}</Text>
    </Card>
   </Link>
  )
}

export default CategoryItem