import React from 'react'

const Home = () => {
  return (
    <section className="splash">
      <div className="container">
        <h1>WELCOME TO SHOPPIES</h1>
        <h2>You can search for your favourite films and nominate them for the upcoming Shoppies Awards</h2>
        <h2>Tech Stack:</h2>
        <ul className="tech-stack">
          <li>Front-end: React, react-router, Reducer, Axios, Material-UI, SASS</li>
          <li>Back-end: Node</li>
          <li>Testing: Cypress (Integration tests), Jest(Unit tests)</li>
          <li>API: OMDB(Movie info)</li>
          <li>DevOps: git, GitHub</li>
        </ul>
      </div>
    </section>
  )
}

export default Home