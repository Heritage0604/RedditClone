import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

type Props = {
 open:boolean
}

const CreateCommunityModal:React.FC<Props> = ({open}) => {
  return (
 
    <>
      <Modal isOpen={open} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} >
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}

export default CreateCommunityModal