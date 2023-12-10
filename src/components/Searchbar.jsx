import { HStack, IconButton, Input } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function Searchbar() {
  const searchRef = useRef(null)
  const navigate = useNavigate()
    const handleClick = ()=>{
        console.log(searchRef.current.value)
        navigate(`/search/${searchRef.current.value}`)
    }
  return (
    <HStack gap={1} justify={'center'} w={'80%'}  mt={8}>
    <Input 
    ref={searchRef}
    textAlign={'center'}
     placeholder='Search for an API'
     variant={'filled'}
     borderWidth={'1px'}
     borderColor={'gray.300'}/>
     <IconButton
     onClick={()=>{
      handleClick()
     }}
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