import { User } from 'firebase/auth'
import React from 'react'

type Props = {
    user:User
    selectPost:Post
    com
}

const Comments = (props: Props) => {
  return (
    <div>Here are the comments</div>
  )
}

export default Comments