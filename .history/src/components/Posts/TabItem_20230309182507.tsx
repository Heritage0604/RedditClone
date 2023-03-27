import React from 'react'
import { Tabitem } from './NewPostForm'

type Props = {
    item:Tabitem;
}

const TabItem:React.FC<Props> = ({item}) => {
  return (
    <div>T{item.title</div>
  )
}

export default TabItem