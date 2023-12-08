import { Box, Card, Text } from '@chakra-ui/react'
import React from 'react'

function CategoryItem(prop) {
  return (
    <Card bgColor={'blue.600'} p={2} m={3} variant={'filled'}>
        <Text  fontSize={{base:'md',md:'sm'}} color={'white'} fontWeight={'semibold'} ml={4}>{prop.category}</Text>
    </Card>
  )
}

export default CategoryItem