import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'


const OauthButton = () => {
  return (
   <Flex width="100%" direction={"column"} mb={4}>
    <Button variant="oauth" mb={3}>
     <Image src="/images/googlelogo.png" alt="Google" height="25px" mr={4}/>
<Text>
 Continue with Google
 </Text>
 
 </Button>
    <Button variant="oauth">
    <Image src="/images/googlelogo.png" alt="Google" height="25px" mr={4}/>
<Text>
Continue with Facebook
 </Text>
 
 </Button>
   </Flex>
  )
}

export default OauthButton