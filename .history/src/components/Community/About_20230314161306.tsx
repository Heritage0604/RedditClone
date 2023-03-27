import { Community } from '@/atoms/CommunityAtom'
import { Flex,Box,Text,Icon } from '@chakra-ui/react'
import React from 'react'
import {HiOutlineDotsHorizontal} from "react-icons/hi"

type Props = {
    communityData:Community
}

const About:React.FC<Props> = ({communityData}) => {
  return (
 <Box position="sticky" top="14px">
<Flex color="white" justify="space-between" bg="blue.400" align="center" p={3} borderRadius="4px 4px 0px 0px">
<Text fontSize="10pt" fontWeight={700} >About Community</Text>
<Icon 
</Flex>
<Flex></Flex>
 </Box>
  )
}

export default About