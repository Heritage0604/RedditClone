import { Post } from '@/atoms/PostAtom'
import React from 'react'

type Props = {
    post:Post
    userIsCreator:boolean
    userVoteValue?:number
    onVote:
}

const PostItem = (props: Props) => {
  return (
    <div>PostItem</div>
  )
}

export default PostItem