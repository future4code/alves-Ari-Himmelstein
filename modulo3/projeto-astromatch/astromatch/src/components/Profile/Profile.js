import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  CardContainer,
  ProfilePhoto,
  InfoProfile,
  Buttons,
  DislikeButton,
  LikeButton,
  ResetButton,
} from "./styled";

function Profile() {
  const [profile, setProfile] = useState({});


  //mostrar os perfis que podem dar matches
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ari/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //se eu der like tem que ver se o usuario tb deu like:
  const choosePerson = (value) => {
    const body = {
      id: profile.id,
      choice: value,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ari/choose-person",
        body
      )
      .then((response) => {
        getProfile();
        if (response.data.isMatch === true) {
          alert("Deu match!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   //resetar todos os perfis
  const clearAllProfiles = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ari/clear"
      )
      .then((response) => {
        getProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <CardContainer>
    
    <ProfilePhoto src={profile.photo} />
    <div>
      <ResetButton onClick={clearAllProfiles}>Limpar</ResetButton>
    </div>

    <InfoProfile>
      <h4>
        {profile.name} , {profile.age}
        <h6>{profile.bio}</h6>
      </h4>
    </InfoProfile>
    <Buttons>
      <DislikeButton onClick={() => choosePerson(false)}>×</DislikeButton>

      <LikeButton onClick={() => choosePerson(true)}>♥</LikeButton>
    </Buttons>

  </CardContainer>
        
      )
}

export default Profile