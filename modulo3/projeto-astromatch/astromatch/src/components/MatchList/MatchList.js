import React, { useState, useEffect } from "react";
import {
  MatchListContainer,
  ListContainer,
  MatchCard,
  PhotoExample,
  MatchName,
} from "./styled";

import axios from "axios";


function MatchList() {

  const [matches, setMatches] = useState([]);

  //mostrar a lista de matches
  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ari/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const getMatch = matches.map((match) => {
    return (
      <ListContainer>
        <MatchCard>
          <PhotoExample src={match.photo} />
          <MatchName>{match.name}</MatchName>
        </MatchCard>
      </ListContainer>
    );
  });
  return <MatchListContainer>{getMatch}</MatchListContainer>;
}

export default MatchList