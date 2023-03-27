import { Post } from '@/atoms/PostAtom'
import React from 'react'

type Props = {
    post:Post
    userIsCreator:boolean
    userVoteValue?:number
    onVote:()=>{}
    onDeletePost:()=>{}
    onSelectPost:()=>{}
}

const PostItem:React.FC<Props></Props> = (props: Props) => {
  return (
    <div>PostItem</div>
  )
}

export default PostItem