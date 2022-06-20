import React from "react";
// @import components
import IntroSection from "../../components/intro-section";
// @import resources
import playlists from "../../assets/images/playlists.svg";

const Playlists = () => {
  return (
    <IntroSection
      image={playlists}
      title={"playlists"}
      subtitle={"Listen to our Pacifique AV"}
      link={""}
      action={"Spotify"}
    >
      <h3>{"PACIFIQUE MUSIC"}</h3>
      <p>
        {
          "Music is an extension of our identity. We create a new musical dynamic, characterized by an intriguing, planing and engaging sound. A very specific sonic signature will begin to take shape."
        }
        <br />
        <br />
        {
          "Exclusive songs and albums will be produced in our studio, with international and talented artists. We’re also exploring the connection between music and NFT’s giving back the power to the artist."
        }
        <br />
        <br />
        {
          "Pacifique Label is looking for new talents to support and develop at 360 degrees, who will represent the Pacifique universe through music, lifestyle and emotions."
        }
        <br />
        <br />
        {"Pacifique Experimental Studio"}
        <br />
        <br />
        {
          "Through the studio, we will offer a creative experience and a meeting point for artists that are looking for a welcoming and inspiring space where writing, recording or just presenting their next project."
        }
      </p>
    </IntroSection>
  );
};

export default Playlists;
