import { authModalState } from '@/atoms/AuthModalAtom'
import { Button } from '@chakra-ui/react'
import React from 'react'
import {useSetRecoilState} from "recoil"

type Props = {}

const AuthButtons = (props: Props) => {
 const setAuthModalState=useSetRecoilState(authModalState)
  return (
 

     <>
     <Button variant={"outline"} height={"28px"} 
     display={{base:"none",sm:"unset",}} 
     width={{base:"75px",md:"110px"}} 
     mr={2}
      onClick={()=>setAuthModalState({open:true,view:'login'})}
     >Log In</Button>


     <Button height="28px"
      display={{ base:"none",sm:"unset",}} 
      width={{base:"80px",md:"110px"}} 
      mr={2}
         onClick={()=>setAuthModalState({open:true,view:'signup'})
         }>Sign Up</Button>
     
     </>
    </
  )
}

export default AuthButtons