import CreateCommunityModal from '@/components/Modal/CreateCommunity/CreateCommunityModal'
import { Flex, Icon, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { GrAdd } from 'react-icons/gr'

type Props = {}

const Communities:React.FC<Props> = () => {
  return (
  <>
  
  <CreateCommunityModal/>
  <MenuItem>
  <Flex align="center">
<Icon as={GrAdd}/>
<Text></Text></Text>
  </Flex>
  
  </MenuItem>

  </>
  )
}

export default Communities