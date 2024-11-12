import React from 'react'
import JoblyApi from './helpers/Api'
import './App.css'
import NavBar from './NavBar'
import RouteList from './RouteList';


function App() {

  return (
    <>
    <main>
    <NavBar />
      <RouteList></RouteList>
    </main>
    </>
  )
}

export default App
