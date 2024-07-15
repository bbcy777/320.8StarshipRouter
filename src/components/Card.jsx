import React from 'react'
import { Link } from 'react-router-dom'

function Card({name, id}) {
  return (
    <div className='box'>
        <Link to={`starship/${id}`} >
        <h4>{name}</h4>
        {console.log(id)}
        </Link>
    </div>
  )
}

export default Card