import React, { useState, useEffect } from "react"
import solar_system from "./img/solar_system.svg"
import Popup from "./Popup"
import logo from "./img/logo.svg"
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
        <img className="logo" src={logo} alt="img" />

        <div className="menu-container">
          <Radio
            value="Mercury"
            top="2%"
            left="7%"
            onChange={handleChange}
            width="5%"
          />
          <Radio
            value="Venus"
            top="19%"
            left="17%"
            onChange={handleChange}
            width="7%"
          />
          <Radio
            value="Earth"
            top="-17%"
            left="29%"
            onChange={handleChange}
            width="7%"
          />
          <Radio
            value="Mars"
            top="15%"
            left="39%"
            onChange={handleChange}
            width="6%"
          />
          <Radio
            value="Jupiter"
            top="-27%"
            left="50%"
            onChange={handleChange}
            width="9%"
          />
          <Radio
            value="Saturn"
            top="15%"
            left="63%"
            onChange={handleChange}
            width="8%"
          />
          <Radio
            value="Uranus"
            top="5%"
            left="78%"
            onChange={handleChange}
            width="7%"
          />
          <Radio
            value="Neptune"
            top="10%"
            left="87%"
            onChange={handleChange}
            width="7%"
          />
        </div>
        <div className="solar-system-img-container">
          <img className="solar-system-img" src={solar_system} alt="img" />
          <label
            className="planet-stroke"
            style={
              selectedPlanet === "Mercury"
                ? { left: "16.25%", top: "47.7%", width: "1.5%" }
                : selectedPlanet === "Venus"
                ? { left: "19.9%", top: "39.7%", width: "4%" }
                : selectedPlanet === "Earth"
                ? { left: "25.4%", top: "39.7%", width: "4.1%" }
                : selectedPlanet === "Mars"
                ? { left: "30.8%", top: "45.4%", width: "2.3%" }
                : selectedPlanet === "Jupiter"
                ? { left: "37.97%", top: "10.2%", width: "12%" }
                : selectedPlanet === "Saturn"
                ? { left: "57.7%", top: "23.1%", width: "9.7%" }
                : selectedPlanet === "Uranus"
                ? { left: "74.9%", top: "38.5%", width: "4.3%" }
                : selectedPlanet === "Neptune"
                ? { left: "80.7%", top: "39%", width: "4.3%" }
                : {}
            }
          ></label>
        </div>
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
