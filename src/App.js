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
            top="0.5%"
            left="11%"
            onChange={handleChange}
            width="10%"
          />
          <Radio
            value="Earth"
            top="1.5%"
            left="32%"
            onChange={handleChange}
            width="10%"
          />
          <Radio
            value="Jupiter"
            top="1.5%"
            left="53%"
            onChange={handleChange}
            width="12%"
          />
          <Radio
            value="Uranus"
            top="5%"
            left="75%"
            onChange={handleChange}
            width="10%"
          />
          <Radio
            value="Venus"
            top="40%"
            left="21%"
            onChange={handleChange}
            width="10%"
          />
          <Radio
            value="Mars"
            top="43%"
            left="41%"
            onChange={handleChange}
            width="10%"
          />
          <Radio
            value="Saturn"
            top="40%"
            left="63%"
            onChange={handleChange}
            width="10%"
          />
          <Radio
            value="Neptune"
            top="47%"
            left="85%"
            onChange={handleChange}
            width="10%"
          />
        </div>
        <div className="solar-system-img-container">
          <img className="solar-system-img" src={solar_system} alt="img" />
          <label
            className="planet-stroke"
            style={
              selectedPlanet === "Mercury"
                ? { left: "16.1%", top: "56%", width: "1.5%" }
                : selectedPlanet === "Venus"
                ? { left: "19.5%", top: "52%", width: "4%" }
                : selectedPlanet === "Earth"
                ? { left: "25.3%", top: "52%", width: "4.1%" }
                : selectedPlanet === "Mars"
                ? { left: "30.3%", top: "54.4%", width: "2.3%" }
                : selectedPlanet === "Jupiter"
                ? { left: "37.6%", top: "39%", width: "12.3%" }
                : selectedPlanet === "Saturn"
                ? { left: "57.1%", top: "43.7%", width: "10.3%" }
                : selectedPlanet === "Uranus"
                ? { left: "74.6%", top: "51.5%", width: "4.3%" }
                : selectedPlanet === "Neptune"
                ? { left: "80.4%", top: "51.5%", width: "4.3%" }
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
