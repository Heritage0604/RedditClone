import { Post, postState } from '@/atoms/PostAtom'
import { User } from 'firebase/auth'
import React,{useEffect,useState,useCallback} from 'react'
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
  Box,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import CommentInput from './CommentInput';
import { useAuthState } from 'react-firebase-hooks/auth'
import { firestore,auth } from '@/firebase/ClientApp'
import { useSetRecoilState } from "recoil";
import {
  collection,
  doc,
  Timestamp,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import { authModalState } from '@/atoms/AuthModalAtom';
import usePosts from '@/Hooks/usePosts'
import { useRouter } from "next/router";
import CommentItem from './CommentItem';




type Props = {
    user:User
    selectedPost:Post |null
    
}

export type Comment={
    id:string
    creatorId:string
    CreatorDisplayText:string
    communityId?:string
    postId:string
    postTitle:string
    text:string
    createdAt:Timestamp
    creatorPhotoURL?: string
}

const Comments:React.FC<Props> = ({user,selectedPost}) => {

const[commentText,setCommentText]=useState("")

 const router = useRouter();
   const{communityId}=router.query
  
const[comments,setComments]=useState<Comment[]>([])
const[fetchLoading,setFetchLoading]=useState(false)
const[createLoading,setCreateLoading]=useState(false)
const setAuthModalState = useSetRecoilState(authModalState);
const setPostState=useSetRecoilState(postState)

const onCreateComment=async()=>{
    // update,create,recoil state
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }

  
    try {
      const batch = writeBatch(firestore);
      const commentDocRef = doc(collection(firestore, "comments"));

const newComment={
        id:commentDocRef.id,
        postId: selectedPost?.id!,
        creatorId: user.uid,
        CreatorDisplayText: user.email!.split("@")[0],
        creatorPhotoURL: user.photoURL!,
       
        text: commentText,
        postTitle: selectedPost?.title!,
        createdAt: serverTimestamp() as Timestamp,
}


      batch.set(commentDocRef, newComment );
      newComment.createdAt={seconds:Date.now()/1000} as Timestamp

      // Update post numberOfComments
      const postDocRef=doc(firestore,"posts",selectedPost?.id!)
      batch.update(postDocRef, {
        numberOfComments: increment(1),
      });
      await batch.commit();

      setCommentText("");
    //   const { id: postId, title } = selectedPost;

   
  
    setComments((prev) => [
        {
            id:commentDocRef.id,
        postId: selectedPost?.id!,
        creatorId: user.uid,
        CreatorDisplayText: user.email!.split("@")[0],
        creatorPhotoURL: user.photoURL!,
        text: commentText,
        postTitle: selectedPost?.title!,
        createdAt: serverTimestamp() as Timestamp,
        } as Comment,
        ...prev,
      ]);

      // Fetch posts again to update number of comments
      setPostState((prev) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          numberOfComments: prev.selectedPost?.numberOfComments! + 1,
        } as Post,
        postUpdateRequired: true,
      }));
    } catch (error: any) {
      console.log("onCreateComment error", error.message);
    }
   
}

 const onDeleteComment = useCallback(
    async (comment: Comment) => {
      // setDeleteLoading(comment.id as string);
      try {
        if (!comment.id) throw "Comment has no ID";
        const batch = writeBatch(firestore);
        const commentDocRef = doc(firestore, "comments", comment.id);
        batch.delete(commentDocRef);

        batch.update(doc(firestore, "posts", comment.postId), {
          numberOfComments: increment(-1),
        });

        await batch.commit();

        setPostState((prev) => ({
          ...prev,
          selectedPost: {
            ...prev.selectedPost,
            numberOfComments: prev.selectedPost?.numberOfComments! - 1,
          } as Post,
          postUpdateRequired: true,
        }));

        setComments((prev) => prev.filter((item) => item.id !== comment.id));
        // return true;
      } catch (error: any) {
        console.log("Error deletig comment", error.message);
        // return false;
      }
     
    },
    [setComments, setPostState]
  );


 const getPostComment = async () => {
    try {
      const commentsQuery = query(
        collection(firestore, "comments"),
        where("postId", "==", selectedPost?.id),
        orderBy("createdAt", "desc")
      );
      const commentDocs = await getDocs(commentsQuery);
      const comments = commentDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(comments as Comment[]);
    } catch (error: any) {
      console.log("getPostComments error", error.message);
    }
  
  };

  useEffect(() => {
    console.log("HERE IS SELECTED POST", selectedPost.id);

    getPostComment();
  }, []);



  return (
  <Box bg="white" borderRadius={"0px 0px 4px 4px "} p={2}>

<Flex direction="column" pl={10} pr={4} mb={6} fontSize="10pt" width="100%">
<CommentInput
 commentText={commentText} setCommentText={setCommentText} 
 createLoading={createLoading} onCreateComment={onCreateComment} user={user}/>
</Flex>

 <Stack spacing={6} p={2}>
        
            {comments.length ? (
              <>
             
                {comments.map((item: Comment) => (
                  <CommentItem
                    key={item.id}
                    comment={item}
                    onDeleteComment={onDeleteComment}
                     loadingDelete={false}
                    userId={user?.uid}
                  />
                ))}
              </>
            ) : (
              <Flex
                direction="column"
                justify="center"
                align="center"
                borderTop="1px solid"
                borderColor="gray.100"
                p={20}
              >
                <Text fontWeight={700} opacity={0.3}>
                  No Comments Yet
                </Text>
              </Flex>
            )}
      
      </Stack>

    </Box>
  )
}

export default Comments
