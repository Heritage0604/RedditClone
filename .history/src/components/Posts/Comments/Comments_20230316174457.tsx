import { Post } from '@/atoms/PostAtom'
import { User } from 'firebase/auth'
import React from 'react'

type Props = {
    user:User
    selectPost:Post
    communitId:string
}

const Comments:React.FC<Props>m = ({user,selectedPost,communityId}) => {

const onCreateComment=async(commentText:string)=>{}
const onDeleteCo

  return (
    <div>Here are the comments</div>
  )
}

export default Comments