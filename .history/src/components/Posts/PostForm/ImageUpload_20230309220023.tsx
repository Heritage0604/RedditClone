import { Flex,Button } from '@chakra-ui/react'
import React,{useRef} from 'react'

type Props = {}

const ImageUpload = (props: Props) => {
const selectedFileRef=useRef<HTMLInputElement>(null)
  return (
    <Flex justify="center" align="center" width="100%">
<Flex justify="center" align="center" border="1px dashed gray.200" borderRadius={4} width="100%" p={20}>
    <Button variant="outline" height="28px" onClick={()=>selectedFileRef.current.click()}>Upload</Button>
    <input type="file" ref={selectedFileRef} hidden
     onChange={onSelectImage}/>
</Flex>
    </Flex>
  )
}

export default ImageUpload