import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const AuthButtons = (props: Props) => {
  return (
    <div>

     <>
     <Button variant={"outline"} height={"28px"}>Log In</Button>
     <Button>Sign Up</Button>
     
     </>
    </div>
  )
}

export default AuthButtons