import React, { useState } from "react";
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { NextRouter } from "next/router";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import { Post } from "../../../atoms/postsAtom";
import Link from "next/link";
type Props = {
    post:Post
    userIsCreator:boolean
    userVoteValue?:number
    onVote:()=>{}
    onDeletePost:()=>{}
    onSelectPost:()=>{}
}

const PostItem:React.FC<Props> = ({post,userIsCreator,userVoteValue,onVote,onDeletePost,onSelectPost}) => {
  return (
    <div>PostItem</div>
  )
}

export default PostItem