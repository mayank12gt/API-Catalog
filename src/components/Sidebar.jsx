import { Box, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import Categories from './Categories';

function Sidebar(props) {
  return (
    <Box
    p={4}
    w={'30%'}
    maxW={'300px'}
    overflowY={'auto'}
 
    borderRightWidth={'1px'}
    borderRightColor={'gray.200'}
    display={{base:'none', md:'block'}}
    h={'100vh'}
    css={{
        '&::-webkit-scrollbar': {
          display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, etc.)
        },
      }}
    >
        <Heading textAlign={'center'} mb={6} color={'blue.700'} mx={2} size={'xl'} fontWeight={'bold'}>API Catalog</Heading>
        
        <Categories categories = {props.categories}/>
      


    </Box>
  )
}

export default Sidebar;