import usePosts from '@/Hooks/usePosts'
import { Community } from '@/atoms/CommunityAtom'
import { Post } from '@/atoms/PostAtom'
import { firestore,auth } from '@/firebase/ClientApp'
import { query,collection,where, orderBy,getDocs } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import PostItem from './PostItem'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData}) => {
 
  const [user]=useAuthState(auth)
    const[loading,setLoading]=useState(false)
    const[postList,setPostList]=useState()
    const{postStateValue,setPostStateValue, onVote,
 onSelectPost,
 onDeletePost}=usePosts()

//  Get Posts
    const getPosts = async()=>{
        try{

const postQuery=query(collection(firestore,"posts"),where(`communityId`,"==",communityData.id),orderBy("createdAt","desc"))
const postDocs=await getDocs(postQuery)
const posts=postDocs.docs.map((doc)=>({id:doc.id,...doc.data()}))
setPostStateValue((prev)=>({
  ...prev,
  posts:posts as Post[],
}))
console.log()
setPostList(postStateValue)

        }catch(error:any){
console.log("error",error.message)
        }
    }
   
    // useEffect Hook
    useEffect(()=>{
   getPosts()
},[])

  return (
<>

  <Stack>
{postList && postStateValue?.posts.map((item)=>(
  <PostItem key={item.id} post={item} userIsCreator={user?.uid===item.creatorId
  }userVoteValue={undefined} onVote={onVote}
  onSelectPost={onSelectPost} onDeletePost={onDeletePost}/>
))}
  </Stack></>
  )
}

export default Post