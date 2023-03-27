import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '@/components/Modal/Auth/AuthModal'


type RightContentProps = {
  user:any;
}

const RightContent:React.FC<RightContentProps> = ({user}) => {
  return (
    <>
    <AuthModal/>
    <Flex justify={"center"} align={"center"}>
     {user? <Button>Lo </Button> : <AuthButtons/> }
    </Flex>
    </>
  )
}

export default RightContent