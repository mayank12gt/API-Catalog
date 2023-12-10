import { Box, Divider, Flex, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Categories from './Categories';

function Sidebar(props) {

  
  return (
    <VStack
   
    pt={4}
    pl={4}
    pr={4}
    pb={2}
    w={'30%'}
    maxW={'300px'}
    
   
    borderRightWidth={'1px'}
    borderRightColor={'gray.200'}
   
   display={{base:'none',md:'flex'}}
   
    >
        <Heading  textAlign={'center'} mb={6} color={'green.600'} mx={2} size={'xl'} fontWeight={'bold'}>API Catalog</Heading>
        <Box 
        overflowY={'auto'}
        w={'100%'}
        
        css={{
          '&::-webkit-scrollbar': {
            display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, etc.)
          },
        }}
        flex={1}>
        { <Categories categories = {props.categories}/> }
       
        </Box>


    </VStack>
  )
}

export default Sidebar;