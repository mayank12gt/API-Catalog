import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Box, Flex, Heading, VStack } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import axios from 'axios'
import Content from './components/Content'
import Searchbar from './components/Searchbar'
import APIContainer from './components/APIContainer'
import { Outlet, Route, Routes } from 'react-router-dom'
function App() {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    console.log('sidebar render')
     getCategories()
  },[])

  
  const getCategories = ()=>{
    console.log('sending request')
    axios.get('https://api.publicapis.org/categories').
    then((res)=>{
      setCategories(res.data.categories)
    }).
    catch(err=>console.log('error'))
  }

  return (
    <Flex h={'100vh'}  alignItems={'stretch'}>
      <Sidebar categories={categories}/>
      <Flex   flex={1} direction={'column'}>
     <Navbar categories={categories}/>
    
    
     
     <VStack p={2}  overflowY={'auto'}   flex={1} alignSelf={'stretch'} >
     <Searchbar/>
     <VStack
     w={'80%'}
      overflowY={'auto'}
      css={{
        '&::-webkit-scrollbar': {
          display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, etc.)
        },
      }}>
        
        
       
        <Routes>
          <Route path='/' element={
             <APIContainer/>}/>
             <Route path='/category/:categoryName' element={
             <APIContainer />}/>
       
        
        
             <Route path='/search/:searchQuery' element={
             <APIContainer />}/>
        </Routes>
    
     </VStack>
      </VStack>
     </Flex>
    </Flex>
  )
}

export default App
