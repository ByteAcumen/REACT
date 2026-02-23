import React from 'react'
import { useState } from 'react';
import Card from './classwork/card.jsx';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [post, setpost] = useState([]);
  const [comment, setComment] = useState([]);
  const [album, setAlbum] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [todo, setTodo] = useState([]);
  const [user, setUser] = useState([]);

  const task = async () => {
    setLoading(true);
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();
    setpost(data);
    setLoading(false);
  }

  const task2 = async () => {
    setLoading(true);
    let res = await fetch('https://jsonplaceholder.typicode.com/comments');
    let data = await res.json();
    setComment(data);
    setLoading(false);
    
  }

  const task3 = async () => {
    setLoading(true);
    let res = await fetch('https://jsonplaceholder.typicode.com/albums');
    let data = await res.json();
    setAlbum(data);
    setLoading(false);
  }

  const task4 = async () => {
    setLoading(true);
    let res = await fetch('https://jsonplaceholder.typicode.com/photos');
    let data = await res.json();
    setPhoto(data);
    setLoading(false);
  }

  const task5 = async () => {
    setLoading(true);
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    setTodo(data);
    setLoading(false);
  }

  const task6 = async () => {
    setLoading(true);
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    setUser(data);
    setLoading(false);
  }
  return (
    <div>

      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand fw-bold fs-4">JSON PLACEHOLDER</span>
      </nav>
      <div className="container my-4">
        <div className="text-center mb-4">
          <button
            className="btn btn-outline-primary"
            onClick={task}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"/>
                Loading...
              </>
            ) : 'Load Posts'}
          </button>

          <button
            className="btn btn-outline-secondary ms-2"
            onClick={task2}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"/>
                Loading...
              </>
            ) : 'Load Comments'}
          </button>
          
          <button 
          className="btn btn-outline-success ms-2" 
          onClick={task3}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"/>
                Loading...
              </>
            ) : 'Load Albums'}
          </button>

          <button 
          className="btn btn-outline-danger ms-2" 
          onClick={task4}
          disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"/>
                Loading...
              </>
            ) : 'Load Photos'}
          </button>

          <button 
          className="btn btn-outline-warning ms-2"
          onClick={task5}
          disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"/>
                Loading...
              </>
            ) : 'Load Todos'}
          </button>

          <button 
          className="btn btn-outline-info ms-2"
          onClick={task6}
          disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"/>
                Loading...
              </>
            ) : 'Load Users'}
          </button>
          <button className="btn btn-outline-secondary ms-2" onClick={() => document.body.classList.toggle('bg-dark')}
          disabled={loading
          }>Dark</button>
        </div>

        <Card p={post} c ={comment} a={album} ph={photo} t={todo} u={user} />
      </div>
    </div>
  )
}

export default App
