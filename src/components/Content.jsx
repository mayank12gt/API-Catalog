import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import Searchbar from './Searchbar'
import APIContainer from './APIContainer'

function Content() {
  return (
    <VStack h={'100%'}   >
        <Searchbar/>
       
        <APIContainer/>
        
    </VStack>
  )
}

export default Content