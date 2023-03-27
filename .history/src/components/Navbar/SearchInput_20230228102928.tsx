import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
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
    <Input placeholder='Search Reddit' fontSize={"10pt"} _pl />
  </InputGroup>

 
    </Flex>
  )
}

export default SearchInput