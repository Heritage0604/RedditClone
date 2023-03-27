import { Stack,Input,Textarea,Button,Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
    textInputs:{
        title:string
        body:string
    }
    onChange:(event:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=>void
    handleCreatePost:()=>void;
    loading:boolean;
}

const TextInput:React.FC<Props> = ({textInputs,onChange,handleCreatePost,loading}) => {
  return (
<Stack spacing={3} width="100%">
<Input
name="title" 
value={textInputs.title} onChange={onChange}
fontSize={"10pt"}
borderRadius={4}
placeholder="Title"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}
/>
<Textarea
name="body" 
value={textInputs.body}  onChange={onChange}
fontSize={"10pt"}
height="100px"
borderRadius={4}
placeholder="Text (optional)"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}/>
<Flex justify={"flex-end"} >
    <Button height="34px" padding="0px 30px" 
    isLoading={loading}
    isDisabled={!textIn.replace(/\s/g, "").length}
     onClick={handleCreatePost}>Post</Button>
</Flex>
</Stack>
  )
}

export default TextInput