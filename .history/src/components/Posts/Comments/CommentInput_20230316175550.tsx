import React from 'react'

type Props = {
    commentText:string
    setCommentText:(commentText:string) => void
    user:User
}

const CommentInput:React.FC<Props> = () => {
  return (
    <div>CommentInput</div>
  )
}

export default CommentInput