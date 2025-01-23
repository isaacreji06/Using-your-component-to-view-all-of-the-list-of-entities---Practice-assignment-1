// write the book component code here
import React from 'react'

function Bookcard({
    image,
    name,
    genre,
    author
}) {
  return (
    <div style={{background:'Red',display:'grid', justifyContent:'center'}}>
        <img style={{height:200,justifyContent:'center'}} src={image} alt="" />
        <p style={{color:'black'}}><strong>Name:</strong>{name}</p>
        <p style={{color:'black'}}><strong>Genre:</strong>{genre}</p>
        <p style={{color:'black'}}><strong>Author:</strong>{author}</p>
    </div>
  )
}

export default Bookcard