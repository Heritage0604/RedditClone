import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

type Props = {
 open:boolean
 handleClose:()=>void
}

const CreateCommunityModal:React.FC<Props> = ({open,handleClose}) => {
  return (
 
    <>
      <Modal isOpen={open} onClose={handleClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" flexDirection={"column"} fontSize={15} padding={}>Create a Community</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo unde, suscipit fugiat eligendi saepe impedit tempore obcaecati quo quaerat eum at eaque, odio consequuntur a rem, voluptate excepturi voluptatem laboriosam.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleClose} >
              Close
            </Button>
            <Button variant='ghost'>Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}

export default CreateCommunityModal