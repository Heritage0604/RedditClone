import React from 'react'
import { Tabitem } from './NewPostForm'
import { Flex, Icon,Text } from '@chakra-ui/react';

type Props = {
    item:Tabitem;
    selected:boolean
}

const TabItem:React.FC<Props> = ({item,selected}) => {
  return (
    
    <Flex>
<Flex align="center" height="20px" mr={2}>
    <Icon as={item.icon}/>
    <Text fontSize={"10pt"}>{item.title}</Text>
</Flex>
    </Flex>
  )
}

export default TabItem