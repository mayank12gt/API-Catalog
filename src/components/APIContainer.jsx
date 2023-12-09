import { Box, Card, CardBody, Flex, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import APICard from './APICard'
import axios from 'axios'

function APIContainer() {
        
    const [APIdata, setAPIdata] = useState([])
    useEffect(()=>{
       getAPIs()
    },[])
    useEffect(()=>{
        console.log('apis rendered')
      })
    const getAPIs = ()=>{
      console.log('sending apis get request')
      axios.get('https://api.publicapis.org/entries').
      then((res)=>{
        setAPIdata(res.data.entries)
      }).
      catch(err=>console.log('error'))
    }

  return (
   <VStack w={'80%'}
    overflowY={'auto'}
   h={'70vh'}
    
    css={{
        '&::-webkit-scrollbar': {
          display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, etc.)
        },
      }}>
    <Flex   flexWrap={'wrap'} flexDirection={{base:'column', md:'row'}}  gap={2} justify={'space-between'}   mt={2}
     w={'100%'} >
    {APIdata && APIdata.map(apiData=>{
        return <APICard apiData={apiData} />
    })}
        
    </Flex>
    </VStack>
    
  )
}

export default APIContainer