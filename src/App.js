import React, { useState } from "react"
import solar_system from "./img/solar_system.svg"
import Radio from "./radio"
import "./App.css"

function App() {
  const [selectedValue, setSelectedValue] = useState("")

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-container">
          <Radio
            value="Mercury"
            top="1.5%"
            left="14%"
            onChange={handleChange}
          />
          <Radio value="Earth" top="1.5%" left="32%" onChange={handleChange} />
          <Radio
            value="Jupiter"
            top="1.5%"
            left="50%"
            onChange={handleChange}
          />
        </div>
        <img className="solar-system-img" src={solar_system} alt="img" />
      </header>
    </div>
  )
}

export default App
