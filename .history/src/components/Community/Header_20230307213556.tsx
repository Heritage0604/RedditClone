import { Community } from '@/atoms/CommunityAtom'
import React from 'react'

type Props = {
    communityData:Community
}

const Header:React.FC<Props> = ({comm}) => {
  return (
    <div>Header</div>
  )
}

export default Header