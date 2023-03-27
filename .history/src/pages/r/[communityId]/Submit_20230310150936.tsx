import NewPostForm from '@/components/Posts/NewPostForm'
import PageContent from '@/components/layout/PageContent'
import { auth } from '@/firebase/ClientApp'
import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {
  user:User|null
}

const submit = (props: Props) => {
  const [user]=useAuthState(auth)
  return (
   <PageContent>
    <>
    <Box p={"14px 0px"} borderBottom={"1px solid"} borderColor={"white"}>
      <Text>Create a post</Text>
    </Box>
    <NewPostForm user={user}/>
    </>
    <></>
   </PageContent>
  )
}

export default submit