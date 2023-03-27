import { Community } from '@/atoms/CommunityAtom'
import { Box, Flex, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FaRedditSquare,FaReddit } from 'react-icons/fa'

type Props = {
    communityData:Community
}

const Header:React.FC<Props> = ({communityData}) => {
  return (
    <Flex direction="column" width="100%" height={"140px"}>
    <Box height="50%" bg="blue.400">     
    </Box>
    <Flex justify="center" flexGrow={1} bg="white">
        <Flex width="95%" maxWidth={"860px"} border="1px solid red">
            {communityData.imageURL ?(
                <Image
            ):(
 <Icon as={FaReddit} fontSize="64px" 
            position="relative" top={-3}
            color="blue.500"
            border="4px solid white"
            borderRadius={"50%"}/>
            )}
           
        </Flex>
    </Flex>
    </Flex>
  )
}

export default Header