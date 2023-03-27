import { Stack,Input,Textarea,Button,Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const TextInput = (props: Props) => {
  return (
<Stack spacing={3} width="100%">
<Input
name="title" 
// value={""} onChange={()=>{}}
fontSize={"10pt"}
borderRadius={4}
placeholder="Title"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}
/>
<Textarea
name="body" 
// value={""} onChange={()=>{}}
fontSize={"10pt"}
height:"100px"
borderRadius={4}
placeholder="Text (optional)"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}/>
<Flex >
    <Button>Post</Button>
</Flex>
</Stack>
  )
}

export default TextInput