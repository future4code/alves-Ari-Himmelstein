import React from 'react'
import MatchList from '../MatchList/MatchList'
import Profile from '../Profile/Profile'
import { useState } from "react"
import { MainContainer, 
         MatchButton, 
         Header, 
         MatchProfileContainer, 
         ButtonsContainer } from "./styled"



function Head() {

    const [selectedPage, setSelectedPage] = useState(false)

  
    const onClickSelectPage =() => {

      setSelectedPage(!selectedPage)
    }
        
     
    return (
      <MainContainer>
        <Header>
          <h4>  Astromatch  </h4>
          <MatchButton onclick={onClickSelectPage}>Matches</MatchButton>
        </Header>
        {selectedPage ? (
        <MatchProfileContainer>
            <Profile selectedPage = {selectedPage} />
            <ButtonsContainer></ButtonsContainer>
          </MatchProfileContainer>
      ) : (
        
        <MatchList selectedPage = {selectedPage}/>
       
      )}
                 
      </MainContainer>
              
    )
                 
}

export default Head