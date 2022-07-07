import React from "react"
import Header from "./components/Header/Header";
import MatchList from "./components/MatchList/MatchList";
import Profile from "./components/Profile/Profile";
import { AppContainer } from "./styled";


function App() {


  return (
    <AppContainer>
      <Header/>
      <MatchList/>
      <Profile/>
    </AppContainer>
    
  );
}

export default App;
