import { Stack,Input,Textarea,Button,Flex } from '@chakra-ui/react'
import React,{useState} from 'react'

type Props = {}
const Data=["Option 3","Option 4","Option 5","Option 6"]

const PollForm:React.FC<Props> = () => {
    const [addOptions,setAddOptions]=useState([])
    const AddInput=()=>{
        if(addOptions.length >0){
            const length=addOptions.length
setAddOptions( arr => [...arr,Data[length]])
return
        }
        
        return

    }

  return (
   <Stack spacing={3} width="100%">
<Input
name="title" 
// value={ linkInputs.title} onChange={onChange}
fontSize={"10pt"}
borderRadius={4}
placeholder="Title"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}
/>
<Textarea
name="body" 
// value={ linkInputs.body}  onChange={onChange}
fontSize={"10pt"}
height="100px"
borderRadius={4}
placeholder="Text(optional)"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}/>

<Flex>
    <Stack width="60%" direction="column" spacing={2}>
    <Input
name="title" 
// value={textInputs.title} onChange={onChange}
fontSize={"10pt"}
borderRadius={4}
placeholder="Option 1"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}
/>
    <Input
name="title" 
// value={textInputs.title} onChange={onChange}
fontSize={"10pt"}
borderRadius={4}
placeholder="Option 2"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}
/>
{}
<Button onClick={AddInput} isDisabled={addOptions.length===4} width="30%" color="blue.500" fontWeight={700} variant={"ghost"}>Add Option</Button>
</Stack>
</Flex>
</Stack>
  )
}

export default PollForm