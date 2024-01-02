import React from 'react'
import { CORE_CONCEPTS } from './data'
const CoreConcepts = ({image, title,description}) => {
  return (
   <li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
   </li>
  )
}

export default CoreConcepts