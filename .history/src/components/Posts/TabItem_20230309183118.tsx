import React from 'react'
import { Tabitem } from './NewPostForm'

type Props = {
    item:Tabitem;
    selected
}

const TabItem:React.FC<Props> = ({item}) => {
  return (
    <div>{item.title}</div>
  )
}

export default TabItem