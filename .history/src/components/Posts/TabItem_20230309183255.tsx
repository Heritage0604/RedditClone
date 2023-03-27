import React from 'react'
import { Tabitem } from './NewPostForm'
import { Flex, Icon } from '@chakra-ui/react';

type Props = {
    item:Tabitem;
    selected:boolean
}

const TabItem:React.FC<Props> = ({item,selected}) => {
  return (
    
    <Flex>
<Flex>
    <Icon as={item.icon}/>
</Flex>
    </Flex>
  )
}

export default TabItem