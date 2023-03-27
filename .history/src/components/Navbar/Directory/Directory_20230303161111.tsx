import { authModalState } from '@/atoms/AuthModalAtom'
import { auth } from '@/firebase/ClientApp'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'
import {TiHome} from "react-icons/ti"



const Directory :React.FC=() => {
   const [signOut, loading, error] = useSignOut(auth);
   const setAuthModalState=useSetRecoilState(authModalState)
  return (
   <Menu>
  <MenuButton cursor="pointer" padding="0px 6px" borderRadius={4}>
  <Flex align="center">
  <Flex align="center">
<Icon as={ TiHome}
  </Flex>
  <ChevronDownIcon/>
  </Flex>
  </MenuButton>
  <MenuList>

   
  
 
  </MenuList>
</Menu>
  )
}

export default Directory