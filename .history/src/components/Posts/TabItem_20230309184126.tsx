import React from 'react'
import { Tabitem } from './NewPostForm'
import { Flex, Icon,Text } from '@chakra-ui/react';

type Props = {
    item:Tabitem;
    selected:boolean
}

const TabItem:React.FC<Props> = ({item,selected}) => {
  return (
    
    <Flex justify={"center"} align="center" flexGrow={1} p="14px 0px" cursor="pointer"
    _hover={{bg:"gray.50"}} color={selected ?"blue.500":"gray.500"} borderWidth={selected ?"0px 1px 2px 0px":"0px 1px "} >
<Flex align="center" height="20px" mr={2}>
    <Icon as={item.icon}/>
    <Text fontSize={"10pt"}>{item.title}</Text>
</Flex>
    </Flex>
  )
}

export default TabItem