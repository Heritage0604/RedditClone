import { Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const PageContent:React.FC<Props> = ({children}) => {
    console.log("here is children" ,children)
  return (
    <Flex>
        <Flex>
            {/* left hand side */}
            <Flex>{children && children[0 as keyof typeof children]}</Flex>
            {/* right hand side */}
            <Flex>{children[1 as keyof typeof children]}</Flex>
        </Flex>
    </Flex>
  )
}

export default PageContent