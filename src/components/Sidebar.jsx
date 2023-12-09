import { Box, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import Categories from './Categories';

function Sidebar(props) {
  return (
    <Box
    p={4}
    w={'30%'}
    maxW={'300px'}
    
   
    borderRightWidth={'1px'}
    borderRightColor={'gray.200'}
    display={{base:'none', md:'block'}}
   
   
    >
        <Heading textAlign={'center'} mb={6} color={'green.600'} mx={2} size={'xl'} fontWeight={'bold'}>API Catalog</Heading>
        <Box h={'85vh'}
    overflowY={'auto'}
    css={{
      '&::-webkit-scrollbar': {
        display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, etc.)
      },
    }}>
        <Categories categories = {props.categories}/>
        </Box>


    </Box>
  )
}

export default Sidebar;