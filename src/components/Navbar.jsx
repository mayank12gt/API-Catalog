import { Drawer,DrawerContent, DrawerBody, DrawerOverlay, Flex, Heading, IconButton, useDisclosure, DrawerHeader, HStack, Icon, Divider, Text, Button, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {CiMenuBurger} from 'react-icons/ci'
import {TfiClose} from 'react-icons/tfi'
import {FaGithub} from 'react-icons/fa'
import CategoryItem from './CategoryItem'

import Categories from './Categories'
function Navbar(props) {
    const sideDrawer = useDisclosure()
    
  return (
    <Flex flexWrap={'wrap'}  alignItems={'center'} p={3}   borderBottomWidth={'1px'} borderBottomColor={'gray.200'}>
      <IconButton display={{md:'none'}} onClick={sideDrawer.onOpen}  color='blue.700' size={'lg'} variant={'subtle'} icon={<CiMenuBurger/>}/>
      <Spacer/>
      <Heading display={{md:'none'}} textAlign={'center'} color={'green.600'} mx={2} size={'xl'} fontWeight={'bold'}>API Catalog</Heading>
      <Spacer/>
      <Button leftIcon={<FaGithub/>}  variant={'outline'}  color={'white'} bgColor={'green.500'}>GitHub</Button>
    <Drawer
    isOpen={sideDrawer.isOpen}
    onClose={sideDrawer.onClose}
    placement='left'
    size={'md'}
    
    onOverlayClick={sideDrawer.onClose}
    >
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerHeader >
          <HStack >
          <Heading flex={1} color={'blue.700'} mx={2} size={'xl'} fontWeight={'bold'}>API Catalog</Heading>
          <IconButton onClick={sideDrawer.onClose} color={'blue.700'} size={'md'} variant={'subtle'} icon={<TfiClose/>}/>
          </HStack>
          <Divider mt={3} borderColor={'blue.700'}/>
        </DrawerHeader>
        <DrawerBody css={{
        '&::-webkit-scrollbar': {
          display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, etc.)
        },
      }}>
          <Categories categories={props.categories}/>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    </Flex>
  )
}

export default Navbar