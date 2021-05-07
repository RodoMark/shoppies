import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/search')
  }

  return (
      <div className="container">
        <section className="stage splash">
        <h1>WELCOME TO SHOPPIES</h1>
        <h2>You can search for your favourite films and nominate them for the upcoming Shoppies Awards. <br /> Start by <button className="btn btn--confirm" onClick={() => handleClick()}>clicking here</button></h2>
        <h2>Tech Stack:</h2>
        <ul className="tech-stack">
          <li>Front-end: React, react-router, Reducer, Axios, Material-UI, SASS</li>
          <li>Back-end: Node</li>
          <li>Testing: Cypress (Integration tests), Jest(Unit tests)</li>
          <li>API: OMDB(Movie info)</li>
          <li>DevOps: git, GitHub</li>
        </ul>
        </section>
      </div>
  )
}

export default Home