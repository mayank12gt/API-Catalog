import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Box, Flex, VStack } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import axios from 'axios'
import Content from './components/Content'
function App() {
  const [categories, setCategories] = useState([])
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
    <Flex   alignItems={'stretch'}
    overflowY={'hidden'}
    >
      <Sidebar categories={categories}/>
      <Flex    flex={1} direction={'column'}>
     <Navbar categories={categories}/>
    
     <Content/>
    
     </Flex>
    </Flex>
  )
}

export default App
