import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Box, Flex, VStack } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import axios from 'axios'
function App() {
  const [categories, setCategories] = useState(['All'])
  useEffect(()=>{
     getCategories()
  },[])
  
  const getCategories = ()=>{
    console.log('sending request')
    axios.get('https://api.publicapis.org/categories').
    then((res)=>{
      setCategories(categories.concat(res.data.categories))
    }).
    catch(err=>console.log('error'))
  }
  return (
    <Flex>
      <Sidebar categories={categories}/>
      <Flex flex={1} direction={'column'}>
     <Navbar categories={categories}/>
     <Box>fas</Box>
     </Flex>
    </Flex>
  )
}

export default App
