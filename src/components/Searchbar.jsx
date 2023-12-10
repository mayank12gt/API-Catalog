import { HStack, IconButton, Input } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
function Searchbar() {
  
  return (
    <HStack gap={1} justify={'center'} w={'80%'}  mt={8}>
    <Input 
    textAlign={'center'}
     placeholder='Search for an API'
     variant={'filled'}
     borderWidth={'1px'}
     borderColor={'gray.300'}/>
     <IconButton
     bgColor={'green.500'}
     color={'white'}
     borderWidth={'1px'}
     borderColor={'gray.300'}
     size={'md'}
     icon={<FaSearch/>}  /> 
    </HStack>
    
  )
}

export default Searchbar