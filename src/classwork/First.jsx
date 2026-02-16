import React from 'react'

const First = () => {

  let styling = {
    color : "red",
    textAlign : "center",
    fontSize : "50px",
    textTransform : "uppercase"
  }
  return (
    <div>
      <h1 style={styling}>Hello this is First Component</h1>
    </div>
  )
}

export default First;
