import React from 'react'
import JoblyApi from './helpers/Api'
import './App.css'
import background from "./assets/WoodBG.jpg"
import NavBar from './NavBar'
import RouteList from './RouteList';


function App() {

  return (
    <div style={{backgroundImage: `url(${background})`,
                 backgroundRepeat: "no-repeat",
                 backgroundPosition: "center",
                 backgroundSize: "cover",
                 backgroundAttachment: "fixed",
                 height: "100%"}}>
    <main>
    <NavBar />
      <RouteList></RouteList>
    </main>
    </div>
  )
}

export default App
