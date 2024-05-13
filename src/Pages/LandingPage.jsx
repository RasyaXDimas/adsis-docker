import React from 'react'
import Persona from '../Component/Persona'
import foto from "../assets/persona.png"

const LandingPage = () => {
  return (
    <>
        <Persona foto={foto} nama="Lenatheaa" role="Front End" quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg" valueEx="First Blood 1000x"
        valueSk="Html, Css, JUngler, Offlaner" valueJb="Gatau mau di isi apa" valueA="Untuk Bernafas" />
    </>
  )
}

export default LandingPage