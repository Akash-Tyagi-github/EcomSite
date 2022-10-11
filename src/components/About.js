import React from 'react'
import HeroSection from './HeroSection'

const About = () => {

  const data={
    name : "Our Online Store"
  }

  return (
    <>
    <HeroSection myData={data}/>
    </>
  )
}

export default About