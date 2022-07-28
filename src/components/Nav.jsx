import { Flex, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <Flex justifyContent={'space-between'} px={'100px'} alignItems={'center'}>
      <NavLink to={'/'} style={{color: 'red'}}>
        <Heading>Komeno Data</Heading>
      </NavLink>
      <HStack fontSize={'20px'} gap={5}>
        <NavLink to={'/'} style={({isActive}) => isActive
        ? {color:'red'} 
        : {color : 'green'} } >Home</NavLink>
        <NavLink to={'/login'} style={({isActive}) => isActive
        ? {color:'red'} 
        : {color : 'green'} } >Login</NavLink>
      </HStack>
    </Flex>
    )
}

export default Nav