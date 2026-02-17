import React from 'react'
import './App.css'
import Data from './Data'

function App() {
  return (
    <div>
      <div className="app-container">
        <div className="cards">
          {Data.map((item) => {
            return (
              <div className="cardd" key={item.id}>
                <span>{item.id}</span>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <h4>User ID: {item.userId}</h4>
                <button className="btn btn-primary">Read More</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
