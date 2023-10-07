import React, { useState, useEffect } from "react"
import solar_system from "./img/solar_system.svg"
import sun from "./img/sun.svg"
import Popup from "./Popup"

import Radio from "./Radio"
import "./App.css"

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState("Earth")
  const [planetsData, setPlanetsData] = useState({
    Earth: {
      info: [],
      activities: [],
    },
  })
  const [showPopup, setPopup] = useState(false)
  const togglePopup = () => {
    setPopup(!showPopup)
  }

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setPlanetsData(data))
      .catch((error) => console.error(error))
  }, [])

  const handleChange = (event) => {
    setSelectedPlanet(event.target.value)
    console.log(selectedPlanet)
  }

  const planetInfo = () => {
    return planetsData[selectedPlanet].info.map((element) => {
      return <p key={element}>{element}</p>
    })
  }

  const planetActivities = () => {
    return planetsData[selectedPlanet].activities.map((element) => {
      return <li key={element}>{element}</li>
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-container">
          <Radio
            value="Mercury"
            top="0.5%"
            left="11%"
            onChange={handleChange}
          />
          <Radio value="Earth" top="1.5%" left="32%" onChange={handleChange} />
          <Radio
            value="Jupiter"
            top="1.5%"
            left="53%"
            onChange={handleChange}
          />
          <Radio value="Uranus" top="5%" left="75%" onChange={handleChange} />
          <Radio value="Venus" top="40%" left="21%" onChange={handleChange} />
          <Radio value="Mars" top="43%" left="41%" onChange={handleChange} />
          <Radio value="Saturn" top="40%" left="63%" onChange={handleChange} />
          <Radio value="Neptune" top="47%" left="85%" onChange={handleChange} />
          <img
            className="sun"
            src={sun}
            alt="img"
            style={{
              left: "-5%",
              top: "43%",
              position: "absolute",
              width: "25%",
            }}
          />
        </div>
        <img className="solar-system-img" src={solar_system} alt="img" />
        <div className="text">
          <button className="choose" onClick={() => togglePopup()}>
            Choose This trip
          </button>

          {showPopup ? (
            <Popup text="Title" closePopup={() => togglePopup()} />
          ) : null}
          <h1>{selectedPlanet}</h1>
          {planetInfo()}
          <h2>Activities</h2>
          <ul>{planetActivities()}</ul>
        </div>
      </header>
    </div>
  )
}

export default App
