import React from 'react'

const Banner = ({nominations}) => {
  return (
    <section className="banner">
    Please select {5 - nominations.length} more movies that you'd like to nominate.
  </section>
  )
  
}

export default Banner