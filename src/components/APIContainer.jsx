import { Box, Card, CardBody, Flex, Heading, VStack } from '@chakra-ui/react'
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
   
    
   
    <Flex flexWrap={'wrap'} flexDirection={{base:'column', md:'row'}}  gap={2} justify={'space-between'}   mt={2}
     w={'100%'} 
     >
    {APIdata && APIdata.map(apiData=>{
        return <APICard apiData={apiData} />
    })}
        
    </Flex>
   
   
   
    
  )
}

export default APIContainer