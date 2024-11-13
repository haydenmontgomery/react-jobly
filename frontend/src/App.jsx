import React, { useEffect, useState } from 'react'
import JoblyApi from './helpers/Api'
import './App.css'
import background from "./assets/WoodBG.jpg"
import NavBar from './NavBar'
import RouteList from './RouteList';
import * as decode from "jwt-decode";

export const TOKEN_STORAGE = "react-token";


/*  Jobly App  
 *  App for applying to jobs.
 *  User can search companies by name to find a company's page and listed jobs
 *  User can also fileter jobs by job title and apply to the jobs listed.
*/

function App() {

  const [token, setToken] = useState(TOKEN_STORAGE);
  const [currentUser, setCurrentUser] = useState({
    data: null,
    infoLoaded: false
  });

  useEffect(
    function loadUser() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = decode(token)
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser({
              infoLoaded: true,
              data: currentUser
            });
            setApplicationIds(new Set(currentUser.applications));
          } catch (err) {
            setCurrentUser({
              data: null,
              infoLoaded: true,
            });
          }
        } else {
          setCurrentUser({
            infoLoaded: true,
            data: null
          });
        }
      }
      getCurrentUser();
      //Checks token change
    }, [token]);

  return (
    <div style={{backgroundImage: `url(${background})`,
                 backgroundRepeat: "no-repeat",
                 backgroundPosition: "center",
                 backgroundSize: "cover",
                 backgroundAttachment: "fixed",
                 height: "100%"}}>
    <main>
    <NavBar />
      <RouteList currentUser={currentUser.data} loginUser={loginUser} signupUser={signupUser} ></RouteList>
    </main>
    </div>
  )
}

export default App
