import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [searchedCity, setSearchedCity] = useState('')

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ad89fce01f5fe32a29d42fdfbcd3b1a&units=metric`
    )

    const data = await response.json()

    console.log(response.status) // Show query response message
    console.log(data)

    setSearchedCity(city)
  }

  return (
    <div>
      <h1>SkyCast</h1>

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)} 
      />

      <button onClick={handleSearch}>Search</button>

      {searchedCity && <p>Location: {searchedCity}</p>}
    </div>
  );
}

export default App;