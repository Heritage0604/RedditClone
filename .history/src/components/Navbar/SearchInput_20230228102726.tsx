import { PhoneIcon,CheckIcon } from '@chakra-ui/icons'
import {  Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React from 'react'

type Props = {}
React
const SearchInput = (props: Props) => {
  return (
    <Flex>
     <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>

 
    </Flex>
  )
}

export default SearchInput