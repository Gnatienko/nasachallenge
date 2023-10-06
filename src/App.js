import solar_system from "./img/solar_system.svg"
import Radio from "./radio"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-container">
          <Radio value="Mercury" top="1.5%" left="14%" />
          <Radio value="Earth" top="1.5%" left="32%" />
          <Radio value="Jupiter" top="1.5%" left="50%" />
        </div>
        <img
          className="solar-system-img"
          src={solar_system}
          alt="img"
          onClick={() => console.log(Radio.value)}
        />
      </header>
    </div>
  )
}

export default App
