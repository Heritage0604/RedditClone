import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Post={
    id: string;
    communityId:string
    creatorId:string
    creatorDisplayName:string
    title:string
    body:string
    numberOfComments:number
    voteStatus:number
    imageURL?:string
    CommunityImageURL?:string
    createdAt:Timestamp
    linktitle:string
    link:string
}
 interface PostState{
    selectedPost:Post|null
    post:Post[]
    // postVote
}
const defaultPostState:PostState={
    selectedPost:null,
    post:[],
}
export const postState= atom<PostState>({
    key:"postState",
    default:defaultPostState
})