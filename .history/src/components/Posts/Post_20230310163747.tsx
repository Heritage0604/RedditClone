import { Community } from '@/atoms/CommunityAtom'
import React from 'react'

type Props = {
    communityData:Community
    userId:string
}

const Post:React.FC = ({communityData,userId}) => {
  return (
    <div>Post</div>
  )
}

export default Post