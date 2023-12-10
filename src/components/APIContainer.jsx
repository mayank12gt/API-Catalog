import { Box, Card, CardBody, Flex, Heading, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import APICard from './APICard'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function APIContainer() {

  const {categoryName} = useParams()
  console.log(categoryName)
  const {searchQuery} = useParams()
  console.log(searchQuery)
        
    const [APIdata, setAPIdata] = useState([])
    useEffect(()=>{
      
       getAPIs()
       
    },[categoryName,searchQuery])
    
    const getAPIs = ()=>{
      console.log('sending apis get request')
      console.log(`https://api.publicapis.org/entries?category=${categoryName==null?'':categoryName}&title=${searchQuery==null?'':searchQuery}`)
      axios.get(`https://api.publicapis.org/entries?category=${categoryName==null?'':categoryName}&title=${searchQuery==null?'':searchQuery}`).
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