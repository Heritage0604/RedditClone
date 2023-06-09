import React from 'react'
import { IconType } from 'react-icons/lib'
import { Flex, Icon, MenuItem, Image } from "@chakra-ui/react";
type Props = {
    displayText:string
    link:string
    icon:IconType
    iconColor:string
    imageURL?:string
}

const MenuListItem:React.FC<Props> = ({displayText,link,icon,iconColor,imageURL}) => {
    const{onSele}
  return (
   <MenuItem
      width="100%"
      fontSize="10pt"
      _hover={{ bg: "gray.100" }}
      onClick={() =>
        onSelectMenuItem({ displayText, link, icon, iconColor, imageURL })
      }
    >
      <Flex alignItems="center">
        {imageURL ? (
          <Image borderRadius="full" boxSize="18px" src={imageURL} mr={2} />
        ) : (
          <Icon  fontSize={20} mr={2} as={icon} color={iconColor} />
        )}
        {displayText}
      </Flex>
    </MenuItem>
  )
}

export default MenuListItem