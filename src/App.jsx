import React from "react"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import data from "./data"

export default function App() {
  
  const cards = data.map(card => {
    return (
      <Cards 
        card={card}
        length={data.length}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )  
}